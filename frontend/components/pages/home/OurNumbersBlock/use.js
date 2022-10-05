import { ref, onMounted, onBeforeMount } from "vue";

const DATE_OF_START = new Date(2020, 7, 20);
const DATE_OF_START_CALC = new Date(2020, 7, 24); // The next Monday after the creation of KIT Studio

const START_WORK_DAY = 10;
const END_WORK_DAY = 19;
const WORK_HOURS = END_WORK_DAY - START_WORK_DAY;

const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

const WORK_SECONDS_IN_DAY = SECONDS_IN_HOUR * WORK_HOURS;

const MILISECONDS_IN_DAY = 86400000;

const SECONDS_PER_ITERATION = 3;

// Is work time

function isWorkTime() {
  const date = new Date();
  const day = date.getDay();
  const hours = date.getHours();

  return (
    day >= 1 && day <= 5 && hours >= START_WORK_DAY && hours < END_WORK_DAY
  );
}

// Get work days from date

function getWorkedSecondsFromDate(from, to) {
  const fromTime = from.getTime();
  const toTime = to.getTime();

  const days = Math.floor((toTime - fromTime) / MILISECONDS_IN_DAY);
  const fullWeeks = Math.floor(days / 7);
  const restOfDays = days % 7;

  const pastWorkDays = fullWeeks * 5 + (restOfDays > 5 ? 5 : restOfDays);

  return WORK_SECONDS_IN_DAY * pastWorkDays;
}

// Get worked seconds today

function getWorkedSecondsToday() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  if (isWorkTime()) {
    return (
      (hours - START_WORK_DAY) * SECONDS_IN_HOUR +
      minutes * SECONDS_IN_MINUTE +
      seconds
    );
  }

  return 0;
}

// Get code lines count from seconds

const timeMap = {
  "3_sec": 2,
  "6_sec": 7,
  "9_sec": 1,
  "12_sec": 3,
  "15_sec": 10,
  "18_sec": 6,
  "21_sec": 8,
  "24_sec": 5,
  "27_sec": 10,
  "30_sec": 4,
};

function getCodeLinesCountFromSeconds(seconds) {
  const fullIterationsCount = Math.floor(seconds / 30);
  const theRest = seconds % 30;

  let totalCodeLines = fullIterationsCount * 56;

  for (let i = 0; i < theRest; i++) {
    const secondsByKey = timeMap[`${i}_sec`];

    if (secondsByKey) {
      totalCodeLines += secondsByKey;
    }
  }

  return totalCodeLines;
}

// Use

export function use() {
  // Block functionality

  const linesOfCode = ref(0);
  const yearsOfExperiance =
    new Date().getFullYear() - DATE_OF_START.getFullYear();

  var calculatorTimer;

  function linesOfCodeCalculate() {
    const date = new Date();

    const workedSecondsBeforeToday = getWorkedSecondsFromDate(
      DATE_OF_START_CALC,
      date
    );
    const workedSecondsToday = getWorkedSecondsToday();
    const totalWorkedSeconds = workedSecondsBeforeToday + workedSecondsToday;

    linesOfCode.value = getCodeLinesCountFromSeconds(totalWorkedSeconds);
  }
  linesOfCodeCalculate();

  onMounted(() => {
    linesOfCodeCalculate();

    calculatorTimer = setInterval(
      linesOfCodeCalculate,
      SECONDS_PER_ITERATION * 1000
    );
  });

  onBeforeMount(() => {
    clearInterval(calculatorTimer);
  });

  return {
    // Block functionality
    yearsOfExperiance,
    linesOfCode,
  };
}
