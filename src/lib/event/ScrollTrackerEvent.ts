import AbstractEvent from 'seng-event/lib/AbstractEvent';
import { generateEventTypes } from 'seng-event/lib/util/eventTypeUtils';
import Side from '../enum/Side';
import ScrollTrackerPoint from '../ScrollTrackerPoint';

/**
 * Events to thrown by ScrollTracker and ScrollTrackerPoint instances
 */
class ScrollTrackerEvent extends AbstractEvent {
	public static ENTER_VIEW: string = 'ScrollTrackerEvent.ENTER_VIEW';
	public static LEAVE_VIEW: string = 'ScrollTrackerEvent.LEAVE_VIEW';
	public static BOUNDS_CHANGED: string = 'ScrollTrackerEvent.BOUNDS_CHANGED';
	public static SCROLLED_BEYOND: string = 'ScrollTrackerEvent.SCROLLED_BEYOND';

	constructor(type: string, public point: ScrollTrackerPoint, public side: Side) {
		super(type);
	}

	public clone(): ScrollTrackerEvent {
		return new ScrollTrackerEvent(this.type, this.point, this.side);
	}
}

generateEventTypes({ ScrollTrackerEvent });

export default ScrollTrackerEvent;
