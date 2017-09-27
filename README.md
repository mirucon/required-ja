(最終更新 : 2017/09/27)

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

* コンテンツを編集できるようにするため、ハードコード（訳注：テーマ内のコードへの直接の記述）を避けること。その代わりに関数の引数、フィルターやアクションフックを使用してください。例えば、[wp_title](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0/wp_title) 関数は [その関数に備えられているフィルター](https://developer.wordpress.org/reference/hooks/wp_title/) を使用して編集されている必要があります。

* 提出するテーマから子テーマがきちんと作れて、かつ使用できるようになっていること (Child theme ready)

* style.css 内の [テーマタグ (英語)](https://make.wordpress.org/themes/handbook/review/required/theme-tags/) と説明 (description) がテーマの実際の機能とデザインに一致していること。また3つ以上の subject tags を使用することは出来ません。([Theme Tag List (英語)](https://make.wordpress.org/themes/handbook/review/required/theme-tags/) を参照)

* 正しい[テンプレートタグ](http://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0)・アクションフック・フィルターフックを使用すること

* comments.php を含めること ([comments_template()](https://wpdocs.osdn.jp/%E3%82%A4%E3%83%B3%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%89%E3%82%BF%E3%82%B0/comments_template) を使います)

* テーマに後方互換性をつけることも出来ますが、3つのメジャーバージョンだけで十分です (4.8が最新であれば4.5)。

* 管理バーを隠したり削除したり非表示にしないこと

## 見た目 vs 機能性 - Presentation vs Functionality

* テーマのオプションを擬似的なカスタム投稿タイプにしないこと。また、重要なユーザーデータを保存してはいけません。

* デザインに関連しない機能をテーマに含めないこと（訳注：そういった機能はプラグインで提供しましょう）。([プラグインテリトリー (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#plugin-territory))

* デモのコンテンツを使用してオプションの仕組みをユーザーに表示することはできますが、プレースホルダコンテンツではなく、[スターターコンテンツ (英語)](https://make.wordpress.org/core/2016/11/30/starter-content-for-themes-in-4-7/) や既存のコンテンツ、インストール手順を使用してください。インストール手順はサイトの訪問者には表示させないようにし、edit_theme_options 権限を持つユーザーへのみ表示させるようにするべきです。

## ドキュメンテーション - Documentation

* テーマが有するすべてのカスタム機能、テンプレート、オプションや制限事項 (メニュー制限など) へは説明を用意すること。これらに関する十分なドキュメントが提供されているべきです。

## 言語 - Language

* テーマにおけるすべての文字列は翻訳できる状態にすること (訳者注 : [i18n for WordPress Developers (日本語 Codex)](https://wpdocs.osdn.jp/I18n_for_WordPress_Developers) を参照)

* style.css 内にテキストドメインを記載すること

* style.css 内に記述した一意のテーマスラッグ (theme slug) を使うこと。フレームワークを使っている場合でも3つ以上のスラッグを使うことは出来ません。

* テキストに使用する言語を一つの言語で統一すること (どの言語も使用可能です)

## ライセンス - Licensing

* 100% GPL ライセンス、もしくは [100% GPL 互換ライセンス (英語)](https://make.wordpress.org/themes/handbook/review/resources/#licenses-bundled-resources) になっていること。

* コピーライトとライセンスを明確にすること。style.css 内の "license" と "license uri" を使用します。

* 同梱されているすべてのリソース、例えばフォントや画像などのライセンスを明確にすること。

* すべてのコードとデザインが自分自身のもの、もしくは法律上自分の所有物となっているものであること。他のデザインのコピーやクローンをすることは出来ません。

* フロントエンドに表示されるコピーライトがテーマ作者のコピーライトではなく、使用しているユーザーのものになっていること。

## 名前付け - Naming

* "WordPress" 及び "Theme" をテーマ名に使用しないこと。

* 子テーマの名前に親テーマの名前を含まれないこと (子テーマと親テーマの制作者が同じの場合を除く)。

* フロントエンドに表示される場所で正しい"WordPress" のスペルを使うこと。"W" 及び "P" を大文字にし、"Word" と "Press" の間にはスペースを挟みません。

## オプションと設定 - Options and Settings

* テーマオプションを実装するには [テーマカスタマイザー (英語)](https://make.wordpress.org/themes/2015/04/22/details-on-the-new-theme-settings-customizer-guideline/) を使うこと。

* オプションは一つの配列に保存すること。

* [常識的なデフォルト値 (英語)](https://make.wordpress.org/themes/2014/07/09/using-sane-defaults-in-themes/) を使い、デフォルト設定はデータベース内に書かないこと。

* 設定を編集できるユーザーを判別するには edit\_theme\_options 権限を使うこと。管理者のような権限グループや他の権限 (edit\_themes や manage\_options) よりもそちらが好ましいです。

## プラグイン - Plugins

* テーマ内にプラグインを含まないこと。

* テーマの動作のためにプラグインを要求しないこと。

* テーマは WordPress.org のプラグインディレクトリにあるプラグインを推奨することのみ可能。

* テーマ内でプラグインを推薦するには [TGM Plugin Activation](http://tgmpluginactivation.com/) を使うこと。

* テーマ内にオプションフレームワークのようなライブラリ（ただし要求事項を見対している必要があります）を含むことも可能。

## スクリーンショット - Screenshot

* スクリーンショットがテーマの外観がどう見えるのかを適切に表現しているものであること。

* スクリーンショット内ではサポートされているプラグインや設定、テンプレートを表示させることは可能。

* スクリーンショットがロゴやモックアップでないこと。

* スクリーンショットが1200 x 900px より大きくないこと。

## プライバシー - Privacy

* Don’t phone home without informed user consent. Make any collection of user data “opt-in” only and have a theme option that is set to disabled by default.

* 短縮 URL をテーマ内で使わないこと。

## 販売・クレジットとリンク - Selling, credits and links

* Theme URI は任意の事項です。

* 使用する場合、WordPress.org 上でホスティングされているテーマに関するもの (訳注 : 「申請しこれから .org 上にホスティングされるテーマ」の意) にリンクすること。

* リンク先がデモサイトの場合、そのコンテンツはテーマ自身に関することにし、テストデータにしないこと。

* Theme URI に WordPress.org を使わないこと。これの使用は公式テーマ用に予約されています。

* Author URI は任意の事項です。使用する場合、テーマ作者の個人 Web サイト、プロジェクトもしくは開発用の Web サイトにリンクすること。

* フッタークレジットには一つのリンクのみを使用すること。またそのリンクは style.css 内に記述された Theme URI もしくは Author URI であること。

* ただし WordPress.org へのリンクはいつでも使用することが出来ます (訳注 : これは上記の「一つのリンク」にはカウントされません)。

* If you are a theme shop you should be selling under GPL to be in the WordPress.org repo ([See explanation](https://make.wordpress.org/themes/2015/08/15/themes-should-be-100-gpl/)).

* 見苦しすぎるほどのテーマの宣伝を表示しないこと。[例 (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#selling-credits-and-links)

## スタイルシートとスクリプト - Stylesheets and Scripts

* スクリプトやスタイルシートをハードコーディングしないこと。

* 圧縮したスクリプト、ファイルなどは、圧縮前のファイルと一緒に配布する場合に限って提供できます。

* たとえばjQueryなどコアにバンドルされているスクリプトを使用する場合は、独自のバージョンを別途含めるのではなく、バンドルされたスクリプトを使用する必要があります。

* 外部リンクは利用せずに、使用するすべてのスクリプトとリソースをテーマに含めます。ただし Google フォントは例外とします。

## テンプレート - Templates

* **テーマ内で使用する場合**、下記の標準のテンプレートファイルをそれぞれの関数によって呼び出すこと:

    * header.php - [get_header()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/get_header)

    * footer.php - [get_footer()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/get_footer)

    * sidebar.php - [get_sidebar()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/get_sidebar)

    * searchform.php - [get_search_form()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/get_search_form)

* **関連テンプレートを使用する場合**、テーマに下記の関数・テンプレートタグなどを含めること:

    * [wp_head()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/wp_head) - &lt;/head&gt; の直前

    * [body_class()](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0/body_class) - &lt;body&gt; タグ内に含める

    * [$content_width （訳注：コンテンツ幅）](https://wpdocs.osdn.jp/%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%B9%85)

    * [post\_class()](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0/post_class)

    * [wp\_link\_pages()](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0/wp_link_pages)

    * [the\_comments\_navigation() (英語)](https://developer.wordpress.org/reference/functions/the_comments_navigation/), [the\_comments\_pagination() (英語)](https://developer.wordpress.org/reference/functions/the_comments_pagination/)

    * [the\_posts\_pagination()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/the_posts_pagination),  [the\_posts\_navigation() (英語)](https://developer.wordpress.org/reference/functions/the_posts_navigation/).

    * [wp_footer()](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0/wp_footer) – &lt;/body&gt; の直前

* カスタムテンプレートファイルは [get\_template\_part()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/get_template_part) もしくは [locate_template()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/locate_template) を使って呼び出すこと。

* フロントページの設定に従って正しい内容が表示されること ([参照 （英語）](https://make.wordpress.org/themes/2014/06/28/correct-handling-of-static-front-page-and-custom-blog-posts-index-template/))。

**テーマレビューチームは現在これらの必須項目のチェックを自動化しようとしています。**

上記の必須項目に加えて  **[推奨項目 (英語)](https://make.wordpress.org/themes/handbook/review/recommended/ "Recommended")** も考慮するべきです。推奨項目はテーマがより良いものになるようなベストプラクティスとして含めるべきアドバイスです。

## 参照 - References

### プラグインテリトリー

* [Plugin Territory – WordPressのその処理はテーマでやるべきかプラグインでやるべきか？ \| Firegoby](https://firegoby.jp/archives/5975)

* [Pluginテリトリーについて // Speaker Deck](https://speakerdeck.com/oleindesign/pluginteritorinituite)

### 100% GPL ライセンス

* [【テーマ編】WordPress を使うなら知っておきたい GPL の知識 \| WP-D](https://wp-d.org/2013/03/01/3075/)

* [GPL: WordPress 4つの自由と ビジネスモデル / WordCamp Tokyo 2015 講演スライド](https://www.slideshare.net/NSKW/gpl-wordpress-4-wordcamp-tokyo-2015)
