import AbstractEvent from 'seng-event/lib/AbstractEvent';
import { generateEventTypes, EVENT_TYPE_PLACEHOLDER } from 'seng-event/lib/util/eventTypeUtils';
import Side from '../enum/Side';
import ScrollTrackerPoint from '../ScrollTrackerPoint';

/**
 * Events to thrown by ScrollTracker and ScrollTrackerPoint instances
 */
class ScrollTrackerEvent extends AbstractEvent {
	public static ENTER_VIEW: string = EVENT_TYPE_PLACEHOLDER;
	public static LEAVE_VIEW: string = EVENT_TYPE_PLACEHOLDER;
	public static BOUNDS_CHANGED: string = EVENT_TYPE_PLACEHOLDER;
	public static SCROLLED_BEYOND: string = EVENT_TYPE_PLACEHOLDER;

	constructor(type: string, public point: ScrollTrackerPoint, public side: Side) {
		super(type);
	}

	public clone(): ScrollTrackerEvent {
		return new ScrollTrackerEvent(this.type, this.point, this.side);
	}
}

generateEventTypes({ ScrollTrackerEvent });

export default ScrollTrackerEvent;
