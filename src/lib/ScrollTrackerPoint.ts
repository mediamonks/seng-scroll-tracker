import sengEvent from 'seng-event';
import Side from './enum/Side';
import ScrollTrackerEvent from './event/ScrollTrackerEvent';
import ScrollTracker from './ScrollTracker';

/**
 * Instance created for every coordinate that a ScrollTracker tracks.
 */
class ScrollTrackerPoint extends sengEvent {
	/**
	 * Boolean indicating if the point is currently in view. Updated when checkInView() is called.
	 */
	public isInView: boolean = false;
	/**
	 * Boolean indicating if the point is currently within the bounds of the target element.
	 * Updated when checkInView() is called.
	 */
	public isInBounds: boolean = false;
	/**
	 * Boolean indicating if the top of the viewport has been scrolled beyond this point
	 */
	public hasScrolledBeyond: boolean = false;

	constructor(
		private scrollPosition: number,
		private pointHeight: number,
		private pointSide: Side,
		private pointTracker: ScrollTracker,
	) {
		super();
		this.checkInView();
	}

	/**
	 * Change the position of this point. Executes checkInView to check if the point has entered or
	 * leaved view.
	 * @param position The position of this points in pixels. This is the distance from the start
	 * or end of the target element depending on the 'side' parameter, measured horizontally or
	 * vertically depending on the axis of this ScrollTracker instance.
	 */
	public set position(position: number) {
		this.scrollPosition = position;
		this.checkInView();
	}

	/**
	 * Change the height of this point. Executes checkInView to check if the point has entered or
	 * leaved view.
	 * @param height The height of this points in pixels. This is the distance from the start
	 * or end of the target element depending on the 'side' parameter, measured horizontally or
	 * vertically depending on the axis of this ScrollTracker instance.
	 */
	public set height(height: number) {
		this.pointHeight = height;
		this.checkInView();
	}

	/**
	 * @returns {number} The current height of the point in pixels. This is the distance from the
	 * start or end of the target element depending on the 'side' parameter, measured horizontally or
	 * vertically depending on the axis of this ScrollTracker instance.
	 */
	public get height(): number {
		return this.pointHeight;
	}

	/**
	 * @returns {number} The current position of the point in pixels. This is the distance from the
	 * start or end of the target element depending on the 'side' parameter, measured horizontally or
	 * vertically depending on the axis of this ScrollTracker instance.
	 */
	public get position(): number {
		return this.scrollPosition;
	}

	/**
	 * @returns {Side} The side of from which the position of this point is measured.
	 */
	public get side(): Side {
		return this.pointSide;
	}

	/**
	 * Checks if this point is in view using it's position and the current scroll position saved on
	 * the ScrollTracker. Updates the isInView property accordingly.
	 * @return {boolean} True if this point is in view.
	 */
	public checkInView(scrollingBack: boolean = false): boolean {
		// const viewStart = this.pointTracker.viewStart; // pageYOffset
		const viewEnd = this.pointTracker.viewEnd; // pageYOffset + windowHeight
		const scrollSize = this.pointTracker.scrollSize; // maxWindowSCroll
		const positionFromStart = this.pointSide === Side.START ? this.scrollPosition : scrollSize - this.scrollPosition;

		// var positionFromStart = this.pointSide == Side.START ? this.scrollPosition : scrollSize - this.scrollPosition;
		const isInView = viewEnd >= this.scrollPosition &&
			viewEnd <= this.scrollPosition + this.pointHeight + window.innerHeight;
		this.isInBounds = this.scrollPosition >= 0 && this.scrollPosition <= viewEnd;

		if (!this.hasScrolledBeyond) {
			const hasScrolledBeyond = viewEnd >= positionFromStart;
			if (hasScrolledBeyond) {
				this.hasScrolledBeyond = true;
				this.dispatchEvent(new ScrollTrackerEvent(
					ScrollTrackerEvent.SCROLLED_BEYOND,
					this,
					Side.END,
				));
			}
		}

		if (this.isInView !== isInView) {
			const eventType = isInView ?
				ScrollTrackerEvent.ENTER_VIEW : ScrollTrackerEvent.LEAVE_VIEW;

			const event = new ScrollTrackerEvent(
				eventType,
				this,
				(isInView ? scrollingBack : !scrollingBack) ? Side.START : Side.END,
			);

			this.isInView = isInView;
			this.dispatchEvent(event);
		}

		return this.isInView;
	}

	/**
	 * Disposes the ScrollTrackerPoint instance.
	 */
	public dispose() {
		this.pointTracker = null;

		super.dispose();
	}
}

export default ScrollTrackerPoint;
