import { AbstractEvent } from 'seng-event';
import Side from '../enum/Side';
import ScrollTrackerPoint from '../ScrollTrackerPoint';

/**
 * Events to thrown by ScrollTracker and ScrollTrackerPoint instances
 */
class ScrollTrackerEvent extends AbstractEvent {
	public static types = {
		ENTER_VIEW: 'ENTER_VIEW',
		LEAVE_VIEW: 'LEAVE_VIEW',
		BOUNDS_CHANGED: 'BOUNDS_CHANGED',
		SCROLLED_BEYOND: 'SCROLLED_BEYOND',
	};

	constructor(type: string, public point: ScrollTrackerPoint, public side: Side) {
		super(type);
	}

	public clone(): ScrollTrackerEvent {
		return new ScrollTrackerEvent(this.type, this.point, this.side);
	}
}

export default ScrollTrackerEvent;
