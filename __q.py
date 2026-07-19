import subprocess, os, sys
SRC="onboarding-single-view-v5.html"; OUT=sys.argv[1]; MODE=sys.argv[2]
html=open(SRC,encoding="utf-8").read()
if MODE=="info": js="go('info1');"
elif MODE=="if3": js="setEntry('instafeed');initHero();renderPick();renderDock();go('hero');heroGo(2);var v=document.getElementById('viewHero');if(v){v.style.animation='none';v.style.opacity='1';}"
else: # rv3 wall forced visible
    js="""setEntry('review');initHero();renderPick();renderDock();go('hero');heroGo(2);
var v=document.getElementById('viewHero');if(v){v.style.animation='none';v.style.opacity='1';}
setTimeout(function(){var pane=document.querySelectorAll('#heroPanes .hero-pane')[2];
pane.classList.remove('poster');pane.classList.add('played');runCounts(pane);
pane.querySelectorAll('.wg').forEach(function(w){w.style.animation='none';w.style.opacity='1';});},350);"""
inject="<script>window.addEventListener('load',function(){setTimeout(function(){%s},200);});</script>"%js
html=html.replace("</body>",inject+"</body>")
tmp="__tq.html";open(tmp,"w",encoding="utf-8").write(html)
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
subprocess.run([CHROME,"--headless=new","--force-device-scale-factor=2","--window-size=1440,1000","--virtual-time-budget=4000","--screenshot="+OUT,"file://"+os.path.abspath(tmp)],check=False)
os.remove(tmp);print("ok")
