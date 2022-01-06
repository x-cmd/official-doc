declare const baiduDataLayer: any[];
declare const btag: (...args: any[]) => void;

declare global {
  interface Window {
    baiduDataLayer?: typeof baiduDataLayer;
    btag?: typeof btag;
  }
}

export const useBaiduAnalytics = (id: string): void => {
  // avoid duplicated import
  if (window.baiduDataLayer && window.btag) {
    return;
  }

  // insert btag `<script>` tag
  const btagScript = document.createElement("script");
  btagScript.src = `https://hm.baidu.com/hm.js?${id}`;
  btagScript.async = true;
  document.head.appendChild(btagScript);

  // insert btag snippet
  window.baiduDataLayer = window.baiduDataLayer || [];
  // the gtag function must use `arguments` object to forward parameters
  window.btag = function () {
    // eslint-disable-next-line prefer-rest-params
    baiduDataLayer.push(arguments);
  };

  btag("js", new Date());
  btag("config", id);
};
