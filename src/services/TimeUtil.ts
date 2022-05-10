export const TimeUtil = {
  sleep(timeout = 50) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  }
}