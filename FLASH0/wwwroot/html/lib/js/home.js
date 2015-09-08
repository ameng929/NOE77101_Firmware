// Editor: Jean-Marie Stawikowski - HUB/WEB - 22/12/2003
// Copyright © 2004 Schneider Electric, All Rights Reserved.


function home()
{
  document.write(
  '<table width="100%" border="0">' +
  '<tr>' +
  '<td class="title"></td>' +
  '</tr>' +
  '<tr>' +
  '<td class="image" align="center" height="260"><img src="' + config.homeImage + '"></td>' +
  '</tr>' +
  '<tr>' +
  '<td align="center">' + config.homeVersion + '</td>' +
  '</tr>' +
  '<tr>' +
  '<td align="center">' + config.homeCopyRight + '</td>' +
  '</tr></table>');
}
