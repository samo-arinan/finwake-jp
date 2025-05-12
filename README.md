# フィネガンズ・ウェイク日本語版

ジェイムズ・ジョイスの最後の小説『フィネガンズ・ウェイク』の日本語訳と解説を提供するウェブサイトのソースコードです。

## 概要

このプロジェクトは、英語原文と日本語訳を並べて表示し、詳細な注釈を提供することで、「言葉の実験室」とも呼ばれるこの難解な作品へのアクセスを容易にすることを目指しています。

フィネガンズ・ウェイクは約60以上の言語を混合し、造語や言葉遊びに満ちた実験的文体で知られています。本サイトでは、単なる直訳ではなく、原文の多層的な意味や音韻パターンを日本語でも再現することを試みています。

## 機能

- **原文と訳文の並列表示**: 英語原文と日本語訳を対照しながら読むことができます
- **縦書き/横書き切替**: 日本語の文章を縦書きまたは横書きで表示できます
- **ルビ表示/非表示**: ルビ（振り仮名）の表示/非表示を切り替えられます
- **注釈表示**: 本文中の注釈マーカーをクリックすると、詳細な注釈が表示されます
- **レスポンシブデザイン**: 様々な画面サイズに対応しています

## 特徴

- **多層的な翻訳アプローチ**: 
  - 原文の音韻パターンを日本語でも再現
  - 多言語的な言葉遊びを日本語文脈で機能する形に変換
  - ルビを活用し、漢字の多義性を利用して重層的な意味を表現

- **FWEETデータベースの活用**:
  - [Finnegans Wake Extensible Elucidation Treasury](http://www.fweet.org/)の情報を参考に、詳細な注釈を提供
  - 作品内の遠隔参照や繰り返しパターンを明示

## 使用技術

- HTML5
- CSS3 (レスポンシブデザイン)
- JavaScript (ES6)
- GitHub Pages (ホスティング)

## ローカルでの実行方法

```bash
# リポジトリのクローン
git clone https://github.com/your-username/finwake-jp.git
cd finwake-jp

# ローカルサーバーの起動（以下のいずれか）
# Python 3の場合
python -m http.server 8000

# Node.jsの場合
npx http-server
```

その後、ブラウザで `http://localhost:8000` にアクセスしてください。

## 貢献方法

プルリクエストや翻訳の提案を歓迎します。以下の方法で貢献できます：

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/your-feature`)
3. 変更をコミット (`git commit -am 'Add some feature'`)
4. ブランチをプッシュ (`git push origin feature/your-feature`)
5. プルリクエストを作成

## 参考文献

- 柳瀬尚紀訳『フィネガンズ・ウェイク』（河出書房新社）
- 宮田恭子訳『抄訳 フィネガンズ・ウェイク』（集英社）
- Roland McHugh著『Annotations to Finnegans Wake』（Johns Hopkins University Press）
- Joseph Campbell著『A Skeleton Key to Finnegans Wake』（New World Library）
- [FWEET - Finnegans Wake Extensible Elucidation Treasury](http://www.fweet.org/)

## ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で公開されています。

## 免責事項

このサイトは研究・教育目的で作成されています。『フィネガンズ・ウェイク』の著作権は関連する権利者に帰属します。引用は公正使用（フェアユース）の範囲内で行っています。
