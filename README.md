# 佐藤医院 Webサイト（学習用）

職業訓練の課題として制作した、架空の医院Webサイトです。

## 構成
- `index.html` トップページ
- `assets/css/style.css` スタイル
- `assets/js/script.js` お知らせ表示・スマホメニュー
- `assets/images/` 支給素材から使用する画像
- `docs/` 補足資料置き場

## 実装方針
- PC版・スマホ版のFigmaデザインを参考にレスポンシブ対応
- セマンティックHTML
- Googleマップはiframeで埋め込み
- お知らせは `assets/js/script.js` の配列から生成し、更新箇所を集約
- 学習用サイトのため `noindex, nofollow` を指定

## 注意
掲載している医院・人物・住所・連絡先は教材用の架空設定です。
