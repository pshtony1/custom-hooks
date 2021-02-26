export const useConfirm = (message = "", callback, rejection) => {
  if (!callback) throw Error("callback is required in useConfirm.");
  if (typeof callback !== "function") return null;

  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else if (rejection && typeof rejection === "function") {
      rejection();
    }
  };

  return confirmAction;
};
