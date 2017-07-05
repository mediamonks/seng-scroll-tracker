import { expect } from 'chai';
import {} from 'mocha';
import ScrollTrackerEvent from '../src/lib/event/ScrollTrackerEvent';
import Side from '../src/lib/enum/Side';

describe('#ScrollTrackerEvent', () => {
	it('should clone itself', () => {
		const scrollTrackerEvent = new ScrollTrackerEvent(
			ScrollTrackerEvent.ENTER_VIEW,
			null,
			Side.START,
		);
		expect(scrollTrackerEvent.clone()).to.deep.equal(scrollTrackerEvent);
	});
});
