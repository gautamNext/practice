function processLogs(logs, threshold) {
  const userIdMapper = {};
  if (logs && Array.isArray(logs)) {
    logs.forEach((ele) => {
      const [sender, recipient] = ele.split(" ");
      if (userIdMapper[sender]) {
        userIdMapper[sender] = userIdMapper[sender] + 1;
      } else {
        userIdMapper[sender] = 1;
      }
      if (sender !== recipient) {
        if (userIdMapper[recipient]) {
          userIdMapper[recipient] = userIdMapper[recipient] + 1;
        } else {
          userIdMapper[recipient] = 1;
        }
      }
    });
  }

  const allUserIdsWithThreshold = Object.keys(userIdMapper).filter(
    (user) => Number(userIdMapper[user]) >= threshold
  );

  return allUserIdsWithThreshold.sort((user1, user2) => user1 - user2);
}

console.log(
  processLogs(["88 99 200", "88 99 100", "99 32 100", "12 12 15"], 2)
);
