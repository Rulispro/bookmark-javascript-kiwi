javascript:(function(){const total=parseInt(prompt("Berapa total grup yang ingin kamu join?"));const delay=parseInt(prompt("Berapa jeda antar join? (dalam milidetik)"));if(isNaN(total)||isNaN(delay)){alert("Input tidak valid!");return;}window.scrollTo({top:0,behavior:"smooth"});let count=0;function clickNext(){const buttons=Array.from(document.querySelectorAll('div[role="button"] span.f2')).filter(el=>el.textContent.trim().toLowerCase()==="join");if(count>=total||buttons.length===0){alert("Selesai join "+count+" grup.");return;}buttons[0].closest('div[role="button"]').click();count++;window.scrollBy({top:150,left:0,behavior:"smooth"});setTimeout(clickNext,delay);}setTimeout(clickNext,1000);})();
                                                                                                                                                                                                                                                                                                                        
