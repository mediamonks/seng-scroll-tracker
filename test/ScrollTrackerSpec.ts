import { expect } from 'chai';
import {} from 'mocha';
import Side from '../src/lib/enum/Side';
import ScrollTracker from '../src/lib/ScrollTracker';
import ScrollTrackerPoint from '../src/lib/ScrollTrackerPoint';
import Axis from '../src/lib/enum/Axis';

let scrollTracker: ScrollTracker;
let scrollTrackerPoint: ScrollTrackerPoint;

let dummyElement:HTMLElement;

describe('#ScrollTracker', () => {
	beforeEach(() => {
		dummyElement = document.createElement('div');
		dummyElement.style.width = '500px';
		dummyElement.style.height = '500px';

		scrollTracker = new ScrollTracker(document.body);
		scrollTrackerPoint = new ScrollTrackerPoint(0, 100, Side.START, scrollTracker);
	});

	it('should return the target', () => {
		expect(scrollTracker.target).to.equal(document.body);
	});

	it('should try to add a new point to the scroll tracker', () => {
		expect(scrollTracker.addPoint(0, 100, Side.START)).to.be.a('object');
	});

	it('should try to remove a point and succeed', () => {
		const point = scrollTracker.addPoint(0, 100, Side.START);
		expect(scrollTracker.removePoint(point)).to.be.true;
	});

	it('should try to remove a point but fail', () => {
		expect(scrollTracker.removePoint(scrollTrackerPoint)).to.be.false;
	});

	it('should try to remove all points and succeed', () => {
		scrollTracker.addPoint(0, 100, Side.START);
		expect(scrollTracker.removeAllPoints()).to.be.undefined;
	});

	it('should dispose the scrollTracker', () => {
		scrollTracker.dispose();
		expect(scrollTracker.isDisposed()).to.be.true;
	});

	it('should create a scroll tracker a html element wrapper and get the Axis', () => {
		const horizontalScrollTracker = new ScrollTracker(dummyElement, Axis.X);
		expect(horizontalScrollTracker.axis).to.equal(Axis.X);
	});
});
