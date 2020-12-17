function ToogleHook(collapsed) {
  const element = collapsed.current;

  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }

  return myHookToogleState;
};

export default ToogleHook;
