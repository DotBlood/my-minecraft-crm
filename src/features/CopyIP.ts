export const useCopyIP = () => {
  const copyIP = () => {
    navigator.clipboard.writeText('mc.example.com');
    alert('IP скопирован!');
  };

  return { copyIP };
};