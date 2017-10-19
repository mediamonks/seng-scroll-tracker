import sengEvent from 'seng-event';
import ScrollTrackerPoint from './ScrollTrackerPoint';
import Axis from './enum/Axis';
import ScrollTrackerEvent from './event/ScrollTrackerEvent';
import Side from './enum/Side';
import { throttle } from 'lodash';

const size = require('element-size');

/**
 * Class that keeps track of the vertical scroll position of an element.
 */
export default class ScrollTracker extends sengEvent {
	private static _DEFAULT_THROTTLE_SCROLL: number = 1000 / 60;
	private static _DEFAULT_THROTTLE_RESIZE: number = 200;

	public trackingPoints: Array<ScrollTrackerPoint> = [];

	public viewSize: number = 0;
	public scrollSize: number = 0;
	public viewStart: number = 0;
	public viewEnd: number = 0;

	private lastScrollPosition: number = 0;

	constructor(private element: HTMLElement | Window = window, private targetAxis: Axis = Axis.Y) {
		super();

		this.initEvents();
	}

	/**
	 * Returns which axis this ScrollTracker instance is tracking.
	 */
	public get axis(): Axis {
		return this.targetAxis;
	}

	/**
	 * Returns the target element this ScrollTracker instance is tracking.
	 */
	public get targetElement(): HTMLElement | Window {
		return this.element;
	}

	/**
	 * Updates the size of the viewport of the target element.
	 */
	public updateSize(): void {
		const isX = this.axis === Axis.X;
		const dimensions = size(this.targetElement);
		this.viewSize = isX ? dimensions[0] : dimensions[1];

		if (this.targetElement === window) {
			const dimensions = size(document.body);
			this.scrollSize = isX ? dimensions[0] : dimensions[1];
		} else {
			const target = <HTMLElement> this.targetElement;
			this.scrollSize = isX ? target.scrollWidth : target.scrollHeight;
		}
	}

	/**
	 * Adds a new point of which we will detect when it enters and leaves the view.
	 * @param position The position of this points in pixels. This is the distance from the start
	 * or end of the target element depending on the 'side' parameter, measured horizontally or
	 * vertically depending on the axis of this ScrollTracker instance.
	 * @param side The side from which the 'position' parameter is defined. Side.START measures the
	 * position from the top or left edge and Side.END will measure the position from the bottom
	 * or right edge.
	 * @returns {ScrollTrackerPoint} A reference to a ScrollTrackerPoint instance that can be
	 * used to bind events, remove or update the point added.
	 */
	public addPoint(position: number, height: number = 1, side: Side = Side.START): ScrollTrackerPoint {
		const point = new ScrollTrackerPoint(position, height, side, this);
		this.trackingPoints.push(point);
		point.addEventListener(ScrollTrackerEvent.ENTER_VIEW, this.pointEventHandler);
		point.addEventListener(ScrollTrackerEvent.LEAVE_VIEW, this.pointEventHandler);

		return point;
	}

	/**
	 * Removes an existing point from this ScrollTracker. This point will be destructed and will
	 * no longer throw events.
	 * @param point The ScrollTrackerPoint instance to remove.
	 * @returns {boolean} Boolean indicating if the point was found and removed successfully.
	 */
	public removePoint(point: ScrollTrackerPoint): boolean {
		const index = this.trackingPoints.indexOf(point);
		if (index >= 0) {
			this.trackingPoints[index].dispose();
			this.trackingPoints.splice(index, 1);
			return true;
		}

		return false;
	}

	/**
	 * Removes all points from this ScrollTracker instance. They will be destructed and will
	 * no longer throw events.
	 */
	public removeAllPoints(): void {
		for (let i = 0; i < this.trackingPoints.length; i += 1) {
			this.trackingPoints[i].dispose();
		}
		this.trackingPoints.length = 0;
	}

	/**
	 * Initialize scroll and resize events using jQuery. Resize events will only be used when
	 * the target of ScrollTracker is 'window'. If the target is not window, updateSize() has
	 * to be called manually to update the view size.
	 */
	private initEvents(): void {
		if (this.targetElement === window) {
			window.addEventListener(
				'resize',
				throttle(this.windowResizeHandler, ScrollTracker._DEFAULT_THROTTLE_RESIZE),
			);

			this.windowResizeHandler();
		} else {
			this.updateSize();
		}

		this.targetElement.addEventListener(
			'scroll',
			throttle(this.scrollHandler, ScrollTracker._DEFAULT_THROTTLE_SCROLL),
		);

		this.scrollHandler();
	}

	/**
	 * Handles events thrown by ScrollTrackerPoint instances and bubbles them up to this
	 * ScrollTracker instance.
	 * @param event The event thrown.
	 */
	private pointEventHandler = (event: ScrollTrackerEvent) => {
		this.dispatchEvent(event);
	}

	/**
	 * Event handler called when the target element is scrolled. Will detect the new scroll
	 * position and call checkInView() on all tracking points.
	 */
	private scrollHandler = () => {
		const isX = this.axis === Axis.X;
		if (this.targetElement === window) {
			this.viewStart = isX ? window.pageXOffset : window.pageYOffset;
		} else {
			const target = <HTMLElement> this.targetElement;
			this.viewStart = isX ? target.scrollLeft : target.scrollTop;
		}

		this.viewEnd = this.viewStart + this.viewSize;

		const scrollingBack = this.viewStart < this.lastScrollPosition;
		this.lastScrollPosition = this.viewStart;

		for (let i = 0; i < this.trackingPoints.length; i += 1) {
			this.trackingPoints[i].checkInView(scrollingBack);
		}
	}

	/**
	 * Event handler called when the window resizes. Only used when the target of this ScrollTracker
	 * instance is the window object.
	 */
	private windowResizeHandler = () => {
		this.updateSize();
	}

	/**
	 * Disposes this ScrollTracker and all points created on it. Removes all event handlers.
	 */
	public dispose(): void {
		window.removeEventListener('resize', this.windowResizeHandler);
		this.targetElement.removeEventListener('scroll', this.scrollHandler);

		this.removeAllPoints();
		super.dispose();
	}
}
