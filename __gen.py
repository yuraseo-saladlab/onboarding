import sys
IDX=int(sys.argv[1]); ON=(sys.argv[2]=="1"); OUT=sys.argv[3]
src=open("onboarding-single-view-v5.html",encoding="utf-8").read()
inj='<script>window.addEventListener("load",function(){try{openDetail("review");dtGo(%d);%s}catch(e){document.title="ERR:"+e.message;}});</script>\n</body>'%(IDX,("setTimeout(function(){var b=document.querySelector('#dtStage [data-act]'); if(b) b.click();},200);" if ON else ""))
open(OUT,"w",encoding="utf-8").write(src.replace("</body>",inj,1))
