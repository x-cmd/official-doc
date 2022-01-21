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

  // inset baidu auto search console
  const bdAutoScript = document.createElement("script");
  const curProtocol = window.location.protocol.split(":")[0];
  curProtocol === "https"
    ? (bdAutoScript.src = "https://zz.bdstatic.com/linksubmit/push.js")
    : (bdAutoScript.src = "http://push.zhanzhang.baidu.com/push.js");
  bdAutoScript.async = true;
  document.head.appendChild(bdAutoScript);

  // insert btag snippet
  window.baiduDataLayer = window.baiduDataLayer || [];
  // the btag function must use `arguments` object to forward parameters
  window.btag = function () {
    // eslint-disable-next-line prefer-rest-params
    baiduDataLayer.push(arguments);
  };

  btag("js", new Date());
  btag("config", id);
};
