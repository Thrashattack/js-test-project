module.exports = (
  input,
  constants = {
    ADAPTERS_STDIO: {
      SEPARATORS: {
        CLIENT_TYPE: ":",
        DATE: ","
      },
      DATE_PATTERN: 'ddMmmyyyy',
      WEEKENDS: ['(sat)', '(sun)']
    },
  }
) => {
  let numberOfWeekends = 0;
  let numberOfWeekdays = 0;

  const rawInput = input.split(constants.ADAPTERS_STDIO.SEPARATORS.CLIENT_TYPE);

  const clientType = rawInput.shift().toLowerCase();

  rawInput
    .shift()
    .split(constants.ADAPTERS_STDIO.SEPARATORS.DATE)
    .map((entry) => {
      const rawDay = entry
        .slice(constants.ADAPTERS_STDIO.DATE_PATTERN.length + 1)
        .split(constants.ADAPTERS_STDIO.SEPARATORS.DATE);
      const day = rawDay.shift();
      const isWeekend = constants.ADAPTERS_STDIO.WEEKENDS.includes(day);

      isWeekend ? numberOfWeekends++ : numberOfWeekdays++;
    });

  return {
    clientType,
    numberOfWeekends,
    numberOfWeekdays,
  };
};
