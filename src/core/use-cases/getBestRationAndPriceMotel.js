module.exports = (motels) => {
  return {
    cheapestMotel: (schedule) => {
      const weekEndPrice = `${schedule.clientType}WeekendPrice`;
      const weekDayPrice = `${schedule.clientType}WeekdayPrice`;

      const motelsByPrice = motels
        .map((motel) => {
          return {
            name: motel.name,
            total:
              motel[weekEndPrice] * schedule.numberOfWeekends +
              motel[weekDayPrice] * schedule.numberOfWeekdays,
            ratio: motel.ratio,
          };
        })
        .sort((motelA, motelB) => motelA.total > motelB.total);

      const motelsDrawedInPrice = motelsByPrice.filter(
        (motel) => motel.total == motelsByPrice[0].total
      );

      const bestChoice = motelsDrawedInPrice
        .sort((motelA, motelB) => motelA.ratio < motelB.ratio)
        .shift();

      return bestChoice.name;
    },
  };
};
