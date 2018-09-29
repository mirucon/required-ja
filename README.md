(最終更新 : 2018/06/30)

WordPress.org の公式レポジトリにテーマを登録する際に必須になる条件の日本語訳です。原文は [https://make.wordpress.org/themes/handbook/review/required/](https://make.wordpress.org/themes/handbook/review/required/) をご覧ください。

以下でリンクされている記事は英語ですが、このページ下部にある参考リンクには日本語での参考になるリンクも記載されています。

---

テーマが WordPress.org の公式レポジトリに掲載されるためには、以下の必須事項すべてを満たしている必要があります。

3個以上の明確な問題があるテーマは not-approved としてチケットがクローズされることがあります。その場合でも問題を修正したあとにもう一度テーマを提出することは出来ます。

これらのチェックに加えて [Theme Check プラグイン](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/) を使用してテーマをテストする必要があります。テーマチェックが何をチェックしているかは [こちら (英語)](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/) から確認できます。

## アクセシビリティ - Accessibility

* テーマに accessibility-ready タグがある場合、[これらの条件 (英語)](https://make.wordpress.org/themes/handbook/review/accessibility/) も満たしていること。

## コード - Code

* PHP, JavaScript のエラーがないこと。

* 有効な DOCTYPE の宣言と language_attributes があること。

* すべての信用されていないデータはデータベースに格納される前にバリデートされ無害化 (sanitize) されていること。また信用されていないデータは出力される前にエスケープされていること。([データ検証](http://wpdocs.osdn.jp/Data_Validation) を参照)

* non-presentational なフック (訳注 : 見た目に関係しないフック) を削除 / 編集しないこと。

* [Theme Check の必須条件 (英語)](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/) を満たしていること。

* 一意の接頭詞 (プレフィックス) をすべてのパブリックな名前空間、オプション、関数、グローバル変数、定数、投稿のメタ情報などに使うこと。ただしサイドバーとメニューの ID は例外とする (これらはテーマ間で同じ名前にするとウィジェット/メニューを引き継げるため)。

<!--
[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#code)
-->

[**» 説明と実例** (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#code)

## コアの機能と機能性 - Core Functionality and Features

* 可能な限り [WordPress の機能](https://developer.wordpress.org/themes/functionality/) を使うこと。  
もし以下の機能をサポートする場合、以下の WordPress 標準機能を使うこと :

    * [フィードリンク](http://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/add_theme_support#.E3.83.95.E3.82.A3.E3.83.BC.E3.83.89.E3.83.AA.E3.83.B3.E3.82.AF)
    * [サイドバー (英語)](https://developer.wordpress.org/themes/functionality/sidebars/)
    * [ナビゲーションメニュー (英語)](https://developer.wordpress.org/themes/functionality/navigation-menus/)
    * [投稿のサムネイル](http://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/add_theme_support#.E6.8A.95.E7.A8.BF.E3.82.B5.E3.83.A0.E3.83.8D.E3.82.A4.E3.83.AB)
    * [カスタムヘッダー](http://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/add_theme_support#.E3.82.AB.E3.82.B9.E3.82.BF.E3.83.A0.E3.83.98.E3.83.83.E3.83.80.E3.83.BC)
    * [カスタム背景](http://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/add_theme_support#.E3.82.AB.E3.82.B9.E3.82.BF.E3.83.A0.E8.83.8C.E6.99.AF)
    * [エディタースタイル (英語)](https://developer.wordpress.org/reference/functions/add_editor_style/).
    * [ロゴ (英語)](https://developer.wordpress.org/themes/functionality/custom-logo/)

* WordPress コアでのみ使われることを意図した機能や API を使わないこと (例 : [admin pointers](https://developer.wordpress.org/reference/classes/wp_internal_pointers/)・[private functions](https://codex.wordpress.org/Category:Private_Functions) など) 。

* WordPress の機能に対して有料でしか使えないようにする制限をかけないこと。

* コンテンツを編集できるようにするため、ハードコード (訳注：テーマ内のコードへの直接の記述) を避けること。その代わりに関数の引数、フィルターやアクションフックを使用してください。例えば、[wp_title()](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0/wp_title) 関数の出力を変更したい場合、 [その関数に備えられているフィルター](https://developer.wordpress.org/reference/hooks/wp_title/) を使用して編集すること。

* テーマから子テーマがきちんと作れて、かつ使用できるようになっていること (Child theme ready) 。

* style.css 内の [テーマタグ (英語)](https://make.wordpress.org/themes/handbook/review/required/theme-tags/) と説明 (description) がテーマの実際の機能とデザインに一致していること。また3つ以上の subject tags を使用しないこと。([Theme Tag List (英語)](https://make.wordpress.org/themes/handbook/review/required/theme-tags/) を参照)

* 正しい [テンプレートタグ](http://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0)・アクションフック・フィルターフックを使用すること。

* comments.php を含めること。 ([comments_template()](https://wpdocs.osdn.jp/%E3%82%A4%E3%83%B3%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%89%E3%82%BF%E3%82%B0/comments_template) を使用する)

* テーマに後方互換性をつけることも可能だが、3つのメジャーバージョンだけで十分とする (4.9が最新であれば4.6)。

* 管理バーを隠す、削除する、非表示するなどをしないこと。

<!--
[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#core-functionality-and-features)
-->

[**» 説明と実例** (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#core-functionality-and-features)

## 見た目 vs 機能性 - Presentation vs Functionality

* テーマのオプションを擬似的なカスタム投稿タイプにしないこと。また、重要なユーザーデータを保存しないこと。

* デザインに関連しない機能をテーマに含めないこと。(訳注：そういった機能はプラグインで提供します) ([プラグインテリトリー (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#plugin-territory))

* デモのコンテンツを使用してオプションの仕組みをユーザーに表示することは可能だが、プレースホルダコンテンツではなく、[スターターコンテンツ (英語)](https://make.wordpress.org/core/2016/11/30/starter-content-for-themes-in-4-7/) や既存のコンテンツ、インストール手順を使用する。それらはサイトの訪問者でなく edit\_theme\_options 権限を持つユーザーへのみ表示させるようこと。

* WordPress.org 上のテーマプレビュー上にプレビュー、デモデータの表示及びそれの操作をしないこと。

* Gutenberg (WordPress の次期エディタ) のカスタムブロックを追加しないこと。

<!--
*   Placeholder/default images for posts without defined featured images [**need to follow these rules**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#featured-images)
-->

* アイキャッチ画像が設定されていない時に表示するプレースホルダ・デフォルト画像は [次のルール (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#featured-images) を守る必要があります。

<!--
[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#plugin-territory)
-->

[**» 説明と実例** (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#plugin-territory)

## ドキュメンテーション - Documentation

* テーマが有するすべてのカスタム機能、テンプレート、オプションや制限事項 (メニュー制限など) に説明を用意すること。またこれらに関する十分なドキュメントが提供されていること。

## 言語 - Language

* テーマにおけるすべての文字列を翻訳できる状態にすること。 (訳注 : [i18n for WordPress Developers (日本語 Codex)](https://wpdocs.osdn.jp/I18n_for_WordPress_Developers) を参照)

* style.css 内にテキストドメインを記載すること。

* style.css 内に記述した一意のテーマスラッグ (theme slug) を使うこと。フレームワークを使用する場合でも使うスラッグは2つ以下にすること。

* テキストに使用する言語を一つの言語で統一すること。 (どの言語でも使用可能)

<!--
[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#language)
-->

[**» 説明と実例** (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#language)

## ライセンス - Licensing

* 100% GPL ライセンス、もしくは [100% GPL 互換ライセンス (英語)](https://make.wordpress.org/themes/handbook/review/resources/#licenses-bundled-resources) になっていること。

* コピーライトとライセンスを明確にすること。style.css 内の "license" と "license uri" を使用します。

* 同梱されているすべてのリソース、例えばフォントや画像などのライセンスを明確にすること。

* すべてのコードとデザインが自分自身のもの、もしくは法律上自分の所有物となっているものであること。他のデザインのコピーやクローンをしないこと。

* フロントエンドに表示されるコピーライトがテーマ作者のコピーライトではなく、使用しているユーザーのものになっていること。

## 名前付け - Naming

* テーマ名に "WordPress" 及び "Theme" を使用しないこと。

* 子テーマの名前に親テーマの名前を含めないこと (子テーマと親テーマの制作者が同じの場合を除く)。

* フロントエンドに表示される場所で正しい "WordPress" のスペルを使うこと。"W" 及び "P" を大文字にし、"Word" と "Press" の間にはスペースを挟まない。

<!--
[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#naming)
-->

[**» 説明と実例** (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#naming)

## オプションと設定 - Options and Settings

* テーマオプションを実装するには [テーマカスタマイザー (英語)](https://make.wordpress.org/themes/2015/04/22/details-on-the-new-theme-settings-customizer-guideline/) を使うこと。

* オプションは一つの配列に保存すること。

* [常識的なデフォルト値 (英語)](https://make.wordpress.org/themes/2014/07/09/using-sane-defaults-in-themes/) を使い、デフォルト設定はデータベース内に書かないこと。

* 設定を編集できるユーザーを判別するには edit\_theme\_options 権限を使うこと。管理者のような権限グループや他の権限 (edit\_themes や manage\_options) よりもそちらを使うべき。

## プラグイン - Plugins

* テーマ内にプラグインを含めないこと。

* テーマの動作のためにプラグインを要求しないこと。

* テーマから WordPress.org もしくは他サードパーティサイトのプラグインを **推奨** することができる (サードパーティサイトの場合は無料・有料問わず、ただし GPL ライセンスされているもののみ)。

* テーマで [TGM Plugin Activation](http://tgmpluginactivation.com/) を使ってプラグインを宣伝することは可能。ただしこれを使用して宣伝できるプラグインは WordPress.org のプラグインディレクトリ上にあるもののみ。プラグインを推奨にするため、設定の引数に `'required' => false` を使う。

* テーマ内にオプションフレームワークのようなライブラリを含むことは可能。ただしそれらも要求事項を満たしている必要あり。

## スクリーンショット - Screenshot

* スクリーンショットがテーマの外観を適切に表現しているものであること。

* スクリーンショット内でテーマがサポートするプラグインや設定、テンプレートを表示させることは出来る。

* スクリーンショットがロゴやモックアップでないこと。

* スクリーンショットが 1200 x 900px より大きくないこと。

* テーマの特徴、機能性または統計情報を示唆、描写しないダミーテキストのみ表示されたスクリーンショットは許容される。ただし、広告のような見た目であれば許可されない。
* ダミーテキスト例：Lorem ipsum (もしくはそれと似たような自動生成されたテキスト)、作成したテーマ、企業、サービスもしくは製品を描写しないテキスト

## プライバシー - Privacy

* ユーザーの許可なしに開発者にデータを送るようにしないこと。またユーザーデータの収集機能を付ける場合、必ずオプトインにし、デフォルトでは無効状態にしておくこと。(訳注 : テーマオプションを使ってユーザーに有効無効を切り替えさせます)

* 短縮 URL をテーマ内で使わないこと。

## 販売・クレジットとリンク - Selling, credits and links

* Theme URI は任意の事項。

* 使用する場合、WordPress.org 上でホスティングされているテーマに関するもの (訳注 : 「申請しこれから .org 上にホスティングされるテーマ」の意) にリンクすること。

* リンク先がデモサイトの場合、そのコンテンツはテーマ自身に関することにし、テストデータにしないこと。

* Theme URI に WordPress.org を使わないこと。これの使用は公式テーマのみが可能。

* Author URI は任意の事項。使用する場合、テーマ作者の個人 Web サイトやプロジェクト、もしくは開発用の Web サイトにリンクすること。

* フッタークレジットには style.css 内に記述された Theme URI もしくは Author URI のどちらかのみが使用されていること。

* ただし WordPress.org へのリンクはいつでも使用することが可能。(訳注 : これは上記の「一つのリンクのみ」にはカウントされません)

* テーマ販売をしている場合、WordPress.org にテーマを登録するには GPL ライセンスの元販売すること。([説明 (英語)](https://make.wordpress.org/themes/2015/08/15/themes-should-be-100-gpl/))また、それを明確に、レビュワーと顧客が簡単に探せる場所に記述する必要がある。

* 見苦しすぎるほどにテーマの宣伝をしないこと。[例 (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#selling-credits-and-links)

* アフィリエイトURLやリンクを含まないこと。 

<!--
[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#selling-credits-and-links)
-->

[**» 説明と実例** (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#selling-credits-and-links)

## スタイルシートとスクリプト - Stylesheets and Scripts

* スクリプトやスタイルシートをハードコーディングしないこと。

* 圧縮したスクリプトやスタイルシートを使う場合、圧縮前のファイルもテーマ内に含めること。

* jQuery のようなコアにバンドルされているスクリプトを使用する場合は、テーマで用意したものを使うのではなく、コアにバンドルされているスクリプトを使用すること。

* 使用するすべてのスクリプトやリソースは外部リンク (訳注 : CDN 等) ではなくテーマ内に含めること。ただし Google フォントは使用可能。

<!--
[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#stylesheets-and-scripts)
-->

[**» 説明と実例** (英語)](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#stylesheets-and-scripts)

## テンプレート - Templates

* **テーマ内で使用する場合**、下記の標準のテンプレートファイルをそれぞれの関数によって呼び出すこと :

    * header.php - [get\_header()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/get_header)

    * footer.php - [get\_footer()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/get_footer)

    * sidebar.php - [get\_sidebar()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/get_sidebar)

    * searchform.php - [get\_search\_form()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/get_search_form)

* **関連テンプレートを使用する場合**、テーマに下記の関数・テンプレートタグなどを含めること :

    * [wp_head()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/wp_head) - &lt;/head&gt; の直前

    * [body_class()](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0/body_class) - &lt;body&gt; タグ内に含める

    * [$content\_width (訳注：コンテンツ幅)](https://wpdocs.osdn.jp/%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%B9%85)

    * [post\_class()](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0/post_class)

    * [wp\_link\_pages()](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0/wp_link_pages)

    * [the\_comments\_navigation() (英語)](https://developer.wordpress.org/reference/functions/the_comments_navigation/), [the\_comments\_pagination() (英語)](https://developer.wordpress.org/reference/functions/the_comments_pagination/)

    * [the\_posts\_pagination()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/the_posts_pagination),  [the\_posts\_navigation() (英語)](https://developer.wordpress.org/reference/functions/the_posts_navigation/).

    * [wp_footer()](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0/wp_footer) – &lt;/body&gt; の直前

* カスタムテンプレートファイルは [get\_template\_part()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/get_template_part) もしくは [locate_template()](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/locate_template) を使って呼び出すこと。

* フロントページの設定に従って正しい内容が表示されること ([参照 (英語)](https://make.wordpress.org/themes/2014/06/28/correct-handling-of-static-front-page-and-custom-blog-posts-index-template/))。

**テーマレビューチームは現在これらのチェックを自動化しようとしています。**

上記の必須項目に加えて  **[推奨項目 (英語)](https://make.wordpress.org/themes/handbook/review/recommended/ "Recommended")** も考慮するべきです。推奨項目はテーマがより良いものになるようなベストプラクティスとして含めるべきアドバイスです。

## 参照 - References

### プラグインテリトリー

* [Plugin Territory – WordPressのその処理はテーマでやるべきかプラグインでやるべきか？ \| Firegoby](https://firegoby.jp/archives/5975)

* [Pluginテリトリーについて // Speaker Deck](https://speakerdeck.com/oleindesign/pluginteritorinituite)

### 100% GPL ライセンス

* [[保存版] WordPress テーマのライセンス、GPL のおはなし – ミルログ](https://www.mirucon.com/2018/04/10/all-about-gpl/)

* [【テーマ編】WordPress を使うなら知っておきたい GPL の知識 \| WP-D](https://wp-d.org/2013/03/01/3075/)

* [GPL: WordPress 4つの自由と ビジネスモデル / WordCamp Tokyo 2015 講演スライド](https://www.slideshare.net/NSKW/gpl-wordpress-4-wordcamp-tokyo-2015)
