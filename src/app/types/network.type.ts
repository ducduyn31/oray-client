declare module 'network' {
  type IpResultCallback = (err: Error, ip: string) => any;

  function get_gateway_ip(callback: IpResultCallback);
}
