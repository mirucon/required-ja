(最終更新 : 2017/09/25)

WordPress.org の公式レポジトリにテーマを登録する際に必須になる条件の日本語訳です。原文は [https://make.wordpress.org/themes/handbook/review/required/](https://make.wordpress.org/themes/handbook/review/required/) をご覧ください。

---

テーマが WordPress.org の公式レポジトリに掲載されるためには、以下の必須事項すべてを満たしている必要があります。

5個以上の明確な問題があるテーマは not-approved としてチケットがクローズされることがあります。その場合でも問題を修正したあとにもう一度テーマを提出することは出来ます。

これらのチェックに加えて [Theme Check プラグイン](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/) を使用してテーマをテストする必要があります。テーマチェックが何をチェックしているかは [こちら (英語)](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/) から確認できます。

## アクセシビリティ - Accessibility

* テーマに accessibility-ready タグがある場合、[これらの条件 (英語)](https://make.wordpress.org/themes/handbook/review/accessibility/) も満たしている必要があります。

## コード - Code

* PHP, JavaScript のエラーがないこと
* 有効な DOCTYPE の宣言と language_attributes があること
* すべての信用されていないデータはデータベースに格納される前にバリデートされ無害化 (sanitize) されていること。また信用されていないデータは出力される前にエスケープされていること ([データ検証](http://wpdocs.osdn.jp/Data_Validation) を参照)
* non-presentational なフックを削除 / 編集しないこと
* [Theme Check の必須条件 (英語)](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/) を満たしていること
* 一意の接頭詞 (プレフィックス) をすべてのパブリックな名前空間、オプション、関数、グローバル変数、定数、投稿のメタ情報などに使うこと

## コアの機能と機能性 - Core Functionality and Features

* 可能な限り [WordPress の機能](https://developer.wordpress.org/themes/functionality/)を使うこと。
  以下の WordPress の機能性をサポートする必要があります :

  * [フィードリンク](http://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/add_theme_support#.E3.83.95.E3.82.A3.E3.83.BC.E3.83.89.E3.83.AA.E3.83.B3.E3.82.AF)
  * [サイドバー (英語)](https://developer.wordpress.org/themes/functionality/sidebars/)
  * [ナビゲーションメニュー (英語)](https://developer.wordpress.org/themes/functionality/navigation-menus/)
  * [投稿のサムネイル](http://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/add_theme_support#.E6.8A.95.E7.A8.BF.E3.82.B5.E3.83.A0.E3.83.8D.E3.82.A4.E3.83.AB)
  * [カスタムヘッダー](http://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/add_theme_support#.E3.82.AB.E3.82.B9.E3.82.BF.E3.83.A0.E3.83.98.E3.83.83.E3.83.80.E3.83.BC)
  * [カスタム背景](http://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/add_theme_support#.E3.82.AB.E3.82.B9.E3.82.BF.E3.83.A0.E8.83.8C.E6.99.AF)
  * [エディタースタイル (英語)](https://developer.wordpress.org/reference/functions/add_editor_style/).
  * [ロゴ (英語)](https://developer.wordpress.org/themes/functionality/custom-logo/)

* WordPress のコアでのみ使われることを意図した機能や API を使わないこと (例 : [admin pointers](https://developer.wordpress.org/reference/classes/wp_internal_pointers/)・[private functions](https://codex.wordpress.org/Category:Private_Functions) など)

* WordPress の機能に対して有料でしか使えないようにする制限をかけないこと

* コンテンツを編集できるようにするため、ハードコード（訳者注：テーマ内のコードへの直接の記述）を避けること。その代わりに関数の引数、フィルターやアクションフックを使用してください。例えば、[wp_title](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0/wp_title) 関数は [その関数に備えられているフィルター](https://developer.wordpress.org/reference/hooks/wp_title/) を使用して編集されている必要があります。

* 提出するテーマから子テーマがきちんと作れて、かつ使用できるようになっていること (Child theme ready)

* style.css 内の [テーマタグ (英語)](https://make.wordpress.org/themes/handbook/review/required/theme-tags/) と説明 (description) がテーマの実際の機能とデザインに一致していること。また3つ以上の subject tags を使用することは出来ません。([Theme Tag List (英語)](https://make.wordpress.org/themes/handbook/review/required/theme-tags/) を参照)

* 正しい[テンプレートタグ](http://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0)・アクションフック・フィルターフックを使用すること

* comments.php を含めること ([comments_template()](https://wpdocs.osdn.jp/%E3%82%A4%E3%83%B3%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%89%E3%82%BF%E3%82%B0/comments_template) を使います)

* テーマに後方互換性をつけることも出来ますが、3つのメジャーバージョンだけで十分です (4.8が最新であれば4.5)。

* 管理バーを隠したり削除したり非表示にしないこと

## 表示 vs 機能性 - Presentation vs Functionality

* テーマのオプションは擬似的なカスタム投稿タイプであってはならず、また、重要なユーザーデータを保存してはいけません。

* デザインに関連しない機能はテーマに含めてはいけません（訳者注：そういった機能はプラグインで提供しましょう）。([プラグインテリトリー (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#plugin-territory))

* デモのコンテンツを使用して、オプションの仕組みをユーザーに表示することができます。プレースホルダコンテンツではなく、[スターターコンテンツ (英語)](https://make.wordpress.org/core/2016/11/30/starter-content-for-themes-in-4-7/)、既存のコンテンツ、またはインストール手順を使用してください。インストール手順は、サイトへの訪問者ではなく edit_theme_options 機能を持つユーザーのみが見ることができます。

## ドキュメンテーション - Documentation

* テーマが有するすべてのカスタム機能、テンプレート、オプション、または制限事項（メニュー制限など）について説明が必須です。これに関する十分なドキュメントが提供されなければなりません。

## 言語 - Language

* All theme text strings are to be translatable.
* Include a text domain in style.css.
* Use a single unique theme slug – as the theme slug appears in style.css. If it uses a framework then no more than 2 unique slugs.
* Can use any language for text, but only use the same one for all text.

## ライセンス - Licensing

* Be 100% GPL and/or [100% GPL-compatible](https://make.wordpress.org/themes/handbook/review/resources/#licenses-bundled-resources) licensed.
* Declare copyright and license explicitly. Use the license and license uri header slugs to style.css.
* Declare licenses of any resources included such as fonts or images.
* All code and design should be your own or legally yours. Cloning of designs is not acceptable.
* Any copyright statements on the front end should display the user’s copyright, not the theme author’s copyright.

## 名前付け - Naming

* Theme names must not use: WordPress, Theme.
* Child themes should not include the name of the parent theme unless the themes have the same author.
* Spell “WordPress” correctly in all public facing text: all one word, with both an uppercase W and P.

## オプションと設定 - Options and Settings

* [Use the Customizer for implementing theme options](https://make.wordpress.org/themes/2015/04/22/details-on-the-new-theme-settings-customizer-guideline/)
* Save options in a single array.
* Use [sane defaults](https://make.wordpress.org/themes/2014/07/09/using-sane-defaults-in-themes/) and don’t write default setting values to the database.
* Use edit_theme_options capability for determining user permission to edit options, rather than rely on a role (e.g. “administrator”), or a different capability (e.g. “edit_themes”, “manage_options”).

## プラグイン - Plugins

* テーマの中にプラグイン機能を含むことはできません。
* テーマを使うためにプラグインを必須とする事はNGです。
* テーマは、WordPress.orgのプラグインディレクトリにあるプラグインを、推薦することはできます。
* テーマ内において、プラグインを推薦する目的で[TGM Plugin Activation](http://tgmpluginactivation.com/)を使うことができます。
* テーマは、オプション・フレームワークのようなライブラリ（要件を満たしたものに限る）を含むことができます。

## スクリーンショット - Screenshot

* スクリーンショットは、テーマが画面でどう見えるのかを適切に表現していなければなりません。
* スクリーンショットは、サポートされているプラグイン、設定とテンプレートを任意に示すことができます。
* スクリーンショットは、ロゴやモックアップであってはいけません。
* スクリーンショットは、1200 x 900px より大きくてはいけません。

## プライバシー - Privacy

* Don’t phone home without informed user consent. Make any collection of user data “opt-in” only and have a theme option that is set to disabled by default.
* No URL shorteners used in the theme.

## 販売・クレジットとリンク - Selling, credits and links

* Theme URI is optional.
* If used, it must be about the theme we’re hosting on WordPress.org.
* If the URI is a demo site, the content must be about the theme itself and not test data.
* Using WordPress.org in the Theme URI is reserved for official themes.
* Author URI is optional. If used it is required to link to an author’s personal website or project/development website.
* Themes may have a single footer credit link, which is restricted to the Theme URI or Author URI defined in style.css.
* Themes may also have an additional footer credit link pointing to WordPress.org.
* If you are a theme shop you should be selling under GPL to be in the WordPress.org repo ([See explanation](https://make.wordpress.org/themes/2015/08/15/themes-should-be-100-gpl/)).
* Themes should not display “obtrusive” upselling. [Examples](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#selling-credits-and-links).

## スタイルシートとスクリプト - Stylesheets and Scripts

* No hard coding of script and style files.
* No minification of scripts or files unless you provide original files.
* Required to use core-bundled scripts rather than including their own version of that script. For example jQuery.
* Include all scripts and resources it uses rather than hotlinking. The exception to this is Google Fonts.

## テンプレート - Templates

* *If used in the theme*, standard template files are required to be called by their respective function:
    * header.php (via [get_header()](https://codex.wordpress.org/Function_Reference/get_header)).
    * footer.php (via [get_footer()](https://codex.wordpress.org/Function_Reference/get_footer)).
    * sidebar.php (via [get_sidebar()](https://codex.wordpress.org/Function_Reference/get_sidebar)).
    * searchform.php (via [get_search_form()](https://codex.wordpress.org/Function_Reference/get_search_form)).

* *If you use the relevant templates*, your theme should include:
    * [wp_head()](https://developer.wordpress.org/reference/functions/wp_head) – (immediately before &lt;/head&gt;).
    * [body_class()](https://developer.wordpress.org/reference/functions/body_class) – (inside &lt;body&gt; tag).
    * [$content_width.](https://codex.wordpress.org/Content_Width)
    * [post_class()](https://developer.wordpress.org/reference/functions/post_class).
    * [wp_link_pages()](https://developer.wordpress.org/reference/functions/wp_link_pages).
    * [the_comments_navigation()](https://developer.wordpress.org/reference/functions/the_comments_navigation/), [the_comments_pagination()](https://developer.wordpress.org/reference/functions/the_comments_pagination/).
    * [the_posts_pagination()](https://developer.wordpress.org/reference/functions/the_posts_pagination/), [the_posts_navigation()](https://developer.wordpress.org/reference/functions/the_posts_navigation/).
    * [wp_footer()](https://developer.wordpress.org/reference/functions/wp_footer) – (immediately before &lt;/body&gt;).

* Custom template files should be called using [get_template_part()](https://developer.wordpress.org/reference/functions/get_template_part/) or [locate_template()](https://developer.wordpress.org/reference/functions/locate_template/).
* Display the correct content according to the front page setting. ([See explanation](https://make.wordpress.org/themes/2014/06/28/correct-handling-of-static-front-page-and-custom-blog-posts-index-template/))

**It’s worth noting we are working to automate a lot of the above requirements.**

Along with the required items, you should also consider the **[recommended items.](https://make.wordpress.org/themes/handbook/review/recommended/ "Recommended")** The recommended items are there to make sure your theme is the best it can be and good advice to include as best practice.
