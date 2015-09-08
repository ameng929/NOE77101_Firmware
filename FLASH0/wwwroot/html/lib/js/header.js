// Editor: Jean-Marie Stawikowski - HUB/WEB - 22/12/2003
// Copyright © 2004 Schneider Electric, All Rights Reserved.

function initMenu(table, color, bgcolor)
{
  var a = table.getElementsByTagName('a');
  for (i=0; i<a.length; i++)
  {
    var s = a[i].style;
    if(a[i].href)
    s.color=color;
    s.fontWeight='normal';
  }

  var td = table.getElementsByTagName('td');
  for (i=0; i<td.length; i++)
  {
    var s = td[i].style;
    s.backgroundColor=bgcolor;
  }
}

function selectMenu(id)
{
  var table1 = document.getElementById('TableMenuProduct');
  var table2 = document.getElementById('TableMenu');

  initMenu(table1, config.titleColor, config.titleBgColor );
  initMenu(table2, "White", '#808080' );
  
  var a = document.getElementsByTagName('a')['A'+id].style;
  a.color='Black';
  
  var td = document.getElementsByTagName('td')['TD'+id].style;
  td.backgroundColor='White';
  
  var button1 = document.getElementsByTagName('Button1');
  button1.src = '../lib/images/left.gif';
}

function writeLogo()
{
  document.write('<img src="' + config.logo + '" >');
}

function writeIcon()
{
  document.write('<table id="TableMenuIcon" cellspacing="0" cellpadding="0" border="0"><tr align="center">');
  document.write('<td width="8px"></td>');
  document.write('<td class="menuIcon"><a href="javascript:openMenu();" ><img id="Button1" align="middle" border="0" src="../lib/images/left.gif"></a></td>');
  document.write('</tr></table>');
}

function replaceUrl()
{
  var main = '?' + window.top.mainTop.main.location.pathname + window.top.mainTop.main.location.search;

  if(window.top.mainTop.location.search)
  {
    window.top.location = window.top.location.pathname + main;
  }
  else
  {
    window.top.location = window.top.mainTop.location.pathname + main;
  }
}

function writeMenuProduct(items)
{
  document.write('<table id="TableMenuProduct" cellspacing="0" cellpadding="0" border="0"><tr align="center">');
  document.write('<td width="1px"></td>');
  
  var length = items[0].length;

  for(var i=0; i<length; i++)
  {
    var id = items[0][i][0];
    var name = items[0][i][1];
    var disabled = items[0][i].length>2 && items[0][i][2]==false;

    if(id=='logout')
    {
      document.write('<td align="right" width="100%" class="menuProduct" ><a href="' + items[0][i][2] + '" target="_top"' + '>' + name + '</a></td>');
    }
    else
    {
      var hrefHome = 'index.htm" target="_top"';
      var hrefId = id + '/index.htm" target="mainTop"';
      document.write('<td id="TD' + id + '" class="menuProduct" ><a id="A' + id + '" ' + (disabled?'style="color:Silver"':'href="' + ((id=='home')?hrefHome:hrefId) ) + '>' + name + '</a></td>');
    }
  }

  document.write('<td id="TDurl" align="right" width="100%" class="menuProduct"><a id="Aurl" href="javascript:replaceUrl();">URL</a></td>');
  document.write('</tr></table>');
}

function writeProduct(items)
{
  document.write('<table width="100%" id="TableProduct" cellspacing="0" cellpadding="0" border="0">'+
    '<tr><td class="product">' + config.title + '</td></tr>'+
    '<tr><td width="100%">');
     writeMenuProduct(items);
  document.write( '</td></tr></table>');
}
 
  
function writeMenu(items)
{
  document.write('<table id="TableMenu" cellspacing="0" cellpadding="0" width="100%" border="0"><tr align="center">');
  for(var i=0; i<items[1].length; i++)
  {
    var id = items[1][i][0];
    var name = items[1][i][1];
    var disabled = items[1][i].length>2 && items[1][i][2]==false;
    
    document.write('<td id="TD' + id + '" class="menu" ><a id="A' + id + '" ' + (disabled?'style="color:Silver"':'href="' + id + '/index.htm" target="mainTop"') + '>' + name + '</a></td>');
  }
  document.write('</tr></table>');
}

function frameLoaded()
{
  var table1 = document.getElementById('TableProduct');
  table1.style.backgroundColor=config.titleBgColor;
  table1.style.color=config.titleColor;
}

function header(items)
{
    if(isPocketPC())
    {
      PocketPC(items);
    }
    else
    {
      otherPlatforms(items);
    }
    document.title=config.titleHtml;
}

function PocketPC(items)
{
  document.write('<img src="' + config.logoPocketPC + '" >');
  document.write('<div class="productPocketPC">' + config.title + '</div>');
  document.write('<div class="categoryPocketPC">' + items[0][0][1] + '</div>');
  document.write('<ul>');

  for(var i=0; i<items[0].length; i++)
  {
    var id = items[0][i][0];
    var name = items[0][i][1];
    var disabled = items[0][i].length>2 && items[0][i][2]==false;

    if(id=='logout')
    {
      document.write('<li><a style="color:Black" href="' + items[0][i][2] + '">' + name + '</a>');
    }
    else
    {
      document.write('<li><a ' + (disabled?'style="color:Silver"':'style="color:Black" href="' + id + '/index.htm" ') + '>' + name + '</a>');
    }
  }

  for(var i=0; i<items[1].length; i++)
  {
    var id = items[1][i][0];
    var name = items[1][i][1];
    var disabled = items[1][i].length>2 && items[1][i][2]==false;
    document.write('<li><a ' + (disabled?'style="color:Silver"':'style="color:Black" href="' + id + '/index.htm" ') + '>' + name + '</a>');
  }
  document.write('</ul></ul>');
}

function otherPlatforms(items)
{
  document.write('<body onload="frameLoaded();"><table id="Table" cellspacing="0" cellpadding="0" border="0"><tr><td>');
  writeLogo();
  document.write('</td><td width="100%">');
  writeProduct(items);
  document.write('</td></tr><tr><td colspan="2" bgcolor="White" height="1"></tr><tr><td>');
  writeIcon();
  document.write('</td><td>');
  writeMenu(items);
  document.write('</td></tr></table></body>');
}

function openMenu()
{
  var frm = window.top.frames['mainTop'];
  if(frm)
  {
    var frmset = frm.document.getElementsByTagName("frameset")[0];

    if(frmset)
    {
      var button1 = document.getElementById('Button1');

      if(frmset.cols=="156,*")
      {
        frmset.cols="0,*";
        button1.src = '../lib/images/right.gif';
      }
      else
      {
        frmset.cols="156,*";
        button1.src = '../lib/images/left.gif';
      }
    }
  }
}
