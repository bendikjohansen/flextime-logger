interface Entry {
  id: string | null;
  startTimestamp: number;
  endTimestamp: number;
  dayOff: boolean,
  lunchDuration: number,
}

export default Entry;
