exports.createdAgo = (createdAt) => {
	const created = new Date(createdAt).getTime();
	const now = new Date().getTime();

	//leave decimal and round it outside to make it accurate?
	const minPassed = (now - created) / 60000;

	if (minPassed < 60) {
		return { time: minPassed, unit: minPassed > 1 ? "minutes" : "minute" };
	} else {
		const hourPassed = minPassed / 60;

		if (hourPassed < 24) {
			return { time: hourPassed, unit: hourPassed > 1 ? "hours" : "hour" };
		} else return { time: hourPassed / 24, unit: hourPassed / 24 > 1 ? "days" : "day" };
	}
};
