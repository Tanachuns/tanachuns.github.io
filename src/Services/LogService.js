export default function timeLog(step, massage = '') {
  const logMessage = `${new Date().toTimeString()} | ${step} | ${massage}`
  console.log(logMessage)
}
