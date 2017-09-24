WordPress.org の公式レポジトリにテーマを登録する際に必須になる条件の日本語訳です。原文は [https://make.wordpress.org/themes/handbook/review/required/](https://make.wordpress.org/themes/handbook/review/required/) をご覧ください。(最終更新 : 2017/09/24)

テーマが WordPress.org の公式レポジトリに掲載されるためには、以下の必須事項すべてを満たしている必要があります。

5個以上の明確な問題があるテーマは not-approved としてチケットがクローズされることがありますが、問題を修正したあとにもう一度テーマを提出することが出来ます。

これらのチェックに加えて [Theme Check](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/) を使用してテーマをテストする必要があります。テーマチェックが何をチェックしているかは [こちら](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/) から確認できます。

## アクセシビリティ - Accessibility

− テーマに accessibility-ready タグがある場合、[これらの条件 (英語)](https://make.wordpress.org/themes/handbook/review/accessibility/) も満たしている必要があります。

## コード - Code

- PHP, JavaScript のエラーがないこと
- 有効な DOCTYPE の宣言と language_attributes があること
− すべての信用されていないデータはデータベースに格納される前にバリデートされ無害化 (sanitize) されていること。また信用されていないデータは出力される前にエスケープされていること ([データ検証](http://wpdocs.osdn.jp/Data_Validation) を参照)
- non-presentational なフックを削除 / 編集しないこと
- [Theme Check の必須条件 (英語)](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/) を満たしていること
- 一意の接頭詞 (プレフィックス) をすべてのパブリックな名前空間、オプション、関数、グローバル変数、定数、投稿のメタ情報などに使うこと

## コアの機能と機能性 - Core Functionality and Features

- 可能な限り [WordPress の機能](https://developer.wordpress.org/themes/functionality/)を使うこと。
  以下の WordPress の機能性をサポートする必要があります :
  
  - [Automatic Feed Links](https://developer.wordpress.org/reference/functions/add_theme_support/#feed-links)
  - [サイドバー](https://developer.wordpress.org/themes/functionality/sidebars/)
  - [ナビゲーションメニュー](https://developer.wordpress.org/themes/functionality/navigation-menus/)
  - [投稿のアイキャッチ画像](https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/)
  - [カスタムヘッダー](https://developer.wordpress.org/themes/functionality/custom-headers/)
  - [カスタム背景](https://codex.wordpress.org/Custom_Backgrounds)
  - [エディタースタイル](https://developer.wordpress.org/reference/functions/add_editor_style/).
  - [ロゴ](https://developer.wordpress.org/themes/functionality/custom-logo/)
