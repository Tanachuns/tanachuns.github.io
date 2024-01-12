export default function timeLog(step, massage = '') {
  const logMessage = `${new Date()} | ${step} | ${massage}`
  console.log(logMessage)
}
