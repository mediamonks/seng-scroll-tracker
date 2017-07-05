import { expect } from 'chai';
import {} from 'mocha';
import Side from '../src/lib/enum/Side';
import ScrollTracker from '../src/lib/ScrollTracker';
import ScrollTrackerPoint from '../src/lib/ScrollTrackerPoint';

let scrollTracker: ScrollTracker;
let scrollTrackerPoint: ScrollTrackerPoint;

describe('#ScrollTrackerPoint', () => {
	beforeEach(() => {
		scrollTracker = new ScrollTracker();
		scrollTrackerPoint = new ScrollTrackerPoint(0, 100, Side.START, scrollTracker);
	});

	it('should return the position', () => {
		expect(scrollTrackerPoint.position).to.equal(0);
	});

	it('should set the position', () => {
		scrollTrackerPoint.position = 10;
		expect(scrollTrackerPoint.position).to.equal(10);
	});

	it('should return the height', () => {
		expect(scrollTrackerPoint.height).to.equal(100);
	});

	it('should set the height', () => {
		scrollTrackerPoint.height = 150;
		expect(scrollTrackerPoint.height).to.equal(150);
	});

	it('should get the side', () => {
		expect(scrollTrackerPoint.side).to.equal(Side.START);
	});
});
