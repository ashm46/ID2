// 訪問者数を取得
let visitorCount = localStorage.getItem('visitorCount');

if (!visitorCount) {
    // 訪問者数が保存されていない場合、初期値を設定
    visitorCount = 1;
} else {
    // 訪問者数を増やす
    visitorCount = parseInt(visitorCount) + 1;
}

// 訪問者数を表示
document.getElementById('visitorCount').textContent = visitorCount;

// 訪問者数を保存
localStorage.setItem('visitorCount', visitorCount);
