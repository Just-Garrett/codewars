//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url){
  url = url.replace('http://', '').replace('https://', '').replace('www.', '')
  url = url.split('.')
  return url[0]
}