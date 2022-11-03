let next = document.getElementById('button');
// 現在の display プロパティの値を保持
const displayOriginal = next.style.display;
// none に設定して非表示
next.style.display = 'none';

$(".説明").on("click", function () {
    $("#introduction").get(0).play();
    next.style.display = displayOriginal;
})


function popupSetting(){
    let popup = document.getElementById('popup');
    if(!popup) return;
  
    let bgBlack = document.getElementById('bg-black');
    let closeBtn = document.getElementById('close-btn');
    let showBtn = document.getElementById('説明');
  
    // ポップアップ
    popUp(bgBlack);
    popUp(closeBtn);
    popUp(showBtn);
  
    // ポップアップ処理
    function popUp(elem){
      if(!elem) return;
    
      elem.addEventListener('click', function(){
        popup.classList.toggle('is-show');
      });
    }
  }
  
  // ポップアップのセッティング
popupSetting();


