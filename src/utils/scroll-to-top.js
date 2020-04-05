import store from "../store";
import { showHeader } from "../actions";

const scrollToTop = () => {

  const offsetTop = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );

  const scrollSpeed = 100;

  if (offsetTop > 0) {
    window.scrollBy(0,( (offsetTop + scrollSpeed)/-10 ));
    setTimeout(scrollToTop,20);
  } else {
    store.dispatch(showHeader(0));
  }

  return false;
};

export default scrollToTop;