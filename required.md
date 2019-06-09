Last modified: 2019-05-28T17:33:03

A theme must meet all of the following requirements to be included in the WordPress.orgWordPress.org The community site where WordPress code is created and shared by the users. This is where you can download the source code for WordPress core, plugins and themes as well as the central location for community conversations and organization. [https://wordpress.org/](https://wordpress.org/) theme repository.

Themes that have 3 or more distinct issues may be closed as not-approved. However, theme authors may resubmit the theme once they’ve corrected the issues.

Along with these checks you should also run the theme through the [Theme Check](https://wordpress.org/plugins/theme-check/) pluginPlugin A plugin is a piece of software containing a group of functions that can be added to a WordPress website. They can extend functionality or add new features to your WordPress websites. WordPress plugins are written in the PHP programming language and integrate seamlessly with WordPress. These can be free in the WordPress.org Plugin Directory https://wordpress.org/plugins/ or can be cost-based plugin from a third-party. You can find a full list of what it [checks here](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/ "Theme check plugin").

* * *

Note: If you are getting started with your first reviews, please read [Become a reviewer](https://make.wordpress.org/themes/handbook/get-involved/become-a-reviewer/). 

* * *

Warning: **If you are a theme shop you should be selling under GPLGPL GPL is an acronym for GNU Public License. It is the standard license WordPress uses for Open Source licensing [https://wordpress.org/about/license/](https://wordpress.org/about/license/). The GPL is a ‘copyleft’ license [https://www.gnu.org/licenses/copyleft.en.html](https://www.gnu.org/licenses/copyleft.en.html). This means that derivative work can only be distributed under the same license terms. This is in distinction to permissive free software licenses, of which the BSD license and the MIT License are widely used examples.GPL GPL is an acronym for GNU Public License. It is the standard license WordPress uses for Open SourceOpen Source Open Source denotes software for which the original source code is made freely available and may be redistributed and modified. Open Source \*\*must be\*\* delivered via a licensing model, see GPL. licensing [https://wordpress.org/about/license/](https://wordpress.org/about/license/). The GPL is a ‘copyleft’ license [https://www.gnu.org/licenses/copyleft.en.html](https://www.gnu.org/licenses/copyleft.en.html). This means that derivative work can only be distributed under the same license terms. This is in distinction to permissive free software licenses, of which the BSD license and the MIT License are widely used examples. to be in the WordPress.orgWordPress.org The community site where WordPress code is created and shared by the users. This is where you can download the source code for WordPress coreCore Core is the set of software required to run WordPress. The Core Development Team builds WordPress., plugins and themes as well as the central location for community conversations and organization. [https://wordpress.org/](https://wordpress.org/) repo** ([See explanation](https://make.wordpress.org/themes/2015/08/15/themes-should-be-100-gpl/)). Example: If you have a **Themeforest account** and you’re selling themes on it, all those themes need to state on their sales page that they are **100% GPL compatible** ([Info](https://help.market.envato.com/hc/en-us/articles/202501194-Theme-Plugin-Licensing-Options)).

* * *

## Multiple Theme Author Accounts

Warning: **This is important,  so please read it carefully**

You can have multiple accounts with the following restrictions:

*   You can’t have more than one (1) open ticket in any of the tracTrac Trac is the place where contributors create issues for bugs or feature requests much like GitHub.[https://core.trac.wordpress.org/](https://core.trac.wordpress.org/). reports/queues or under review. That means you can’t have one (1) theme ticket from an account and another one from a secondary account, simultaneously open in any of the queues.
*   Failing to respect the above requirement will result in the closing of all tickets and not having the possibility to upload those themes again. Also, a 1 month no upload possibility for each ticket closed. Depending on the severity of the case, you might also end up with a permanent ban on all your accounts
*   To avoid penalties, we request that you disclose all your accounts by emailing us at themes\[at\]wordpress.org.

## Child themes

*   Child themes must include more than minor changes (such as font and colour changes) to the parent theme to be accepted. To make it easier on the reviewer, make sure you describe what modifications/features you did on top of the parent theme (in a ticket comment).

## AccessibilityAccessibility Accessibility (commonly shortened to a11y) refers to the design of products, devices, services, or environments for people with disabilities. The concept of accessible design ensures both “direct access” (i.e. unassisted) and “indirect access” meaning compatibility with a person’s assistive technology (for example, computer screen readers). (https://en.wikipedia.org/wiki/Accessibility)

*   If the theme has the tag ‘accessibility-ready’ then it needs to meet [these requirements](https://make.wordpress.org/themes/handbook/review/accessibility/ "Accesibility").

## Code

*   No PHPPHP PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML. [http://php.net/manual/en/intro-whatis.php](http://php.net/manual/en/intro-whatis.php). or JS notices.
*   Validate and/or sanitize untrusted data before entering into the database. All untrusted data should be escaped before output. (See: [Data Validation](https://codex.wordpress.org/Data_Validation))
*   No removing or modifying non-presentational hooksHooks In WordPress theme and development, hooks are functions that can be applied to an action or a Filter in WordPress. Actions are functions performed when a certain event occurs in WordPress. Filters allow you to modify certain functions. Arguments used to hook both filters and actions look the same..
*   Must meet all [Theme Check requirements](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/)
*   Provide a [unique prefix](http://themereview.co/prefix-all-the-things/) for everything the Theme defines in the public namespace, including options, functions, global variables, constants, post metaMeta Meta is a term that refers to the inside workings of a group. For us, this is the team that works on internal WordPress sites like WordCamp Central and Make WordPress., etc. Theme nav menu locations and sidebarSidebar A sidebar in WordPress is referred to a widget-ready area used by WordPress themes to display information that is not a part of the main content. It is not always a vertical column on the side. It can be a horizontal rectangle below or above the content area, footer, header, or any where in the theme. IDs are exceptions.

[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#code)

## Core Functionality and Features

*   Use [WordPress functionality and features first, if available](https://developer.wordpress.org/themes/functionality/ "WordPress functionality and features").  
    *If incorporated,* features must support the WordPress functionality:
    *   [Automatic Feed Links](https://developer.wordpress.org/reference/functions/add_theme_support/#feed-links)
    *   [Sidebars](https://developer.wordpress.org/themes/functionality/sidebars/).
    *   [Navigation Menus](https://developer.wordpress.org/themes/functionality/navigation-menus/).
    *   [Post Thumbnails](https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/).
    *   [Custom Headers](https://developer.wordpress.org/themes/functionality/custom-headers/).
    *   [Custom Backgrounds](https://codex.wordpress.org/Custom_Backgrounds).
    *   [Editor Style](https://developer.wordpress.org/reference/functions/add_editor_style/).
    *   [Logo.](https://developer.wordpress.org/themes/functionality/custom-logo/)
*   Do not use features/APIs meant for WP Core use only e.g. [admin pointers](https://developer.wordpress.org/reference/classes/wp_internal_pointers/) and [private functions](https://codex.wordpress.org/Category:Private_Functions).
*   No pay wall restricting any WordPress feature.
*   Avoid hard coding to modify content. Instead, use function parameters, filters and action hooks where appropriate. For example [wp_title](https://developer.wordpress.org/reference/functions/wp_title/) should be modified using a [filter](https://developer.wordpress.org/reference/hooks/wp_title/).
*   Able to have child themes made from them. (Child themeChild theme A Child Theme is a customized theme based upon a Parent Theme. It’s considered best practice to create a child theme if you want to modify the CSS of your theme. [https://developer.wordpress.org/themes/advanced-topics/child-themes/](https://developer.wordpress.org/themes/advanced-topics/child-themes/). ready)
*   The [theme tags](https://make.wordpress.org/themes/handbook/review/required/theme-tags/) in style.css and description must match what the theme actually does in respect to functionality and design. Don’t use more than 3 subject tags (See: [Theme Tag List](https://make.wordpress.org/themes/handbook/review/required/theme-tags/)).
*   Use [template tags](https://codex.wordpress.org/Template_Tags) and action/filterFilter Filters are one of the two types of Hooks [https://codex.wordpress.org/Plugin_API/Hooks](https://codex.wordpress.org/Plugin_API/Hooks). They provide a way for functions to modify data of other functions. They are the counterpart to Actions. Unlike Actions, filters are meant to work in an isolated manner, and should never have side effects such as affecting global variables and output. hooks properly.
*   Include comments.php (via [comments_template()](https://codex.wordpress.org/Function_Reference/comments_template)).
*   Themes may be backwards compatible, but only for 3 major WordPress versions (version 4.9 if 5.2 is latest).
*   Themes should not remove, hide, or otherwise blockBlock Block is the abstract term used to describe units of markup that, composed together, form the content or layout of a webpage using the WordPress editor. The idea combines concepts of what in the past may have achieved with shortcodes, custom HTML, and embed discovery into a single consistent API and user experience. the admin bar from appearing.
*   Core theme activation UXUX UX is an acronym for User Experience - the way the user uses the UI. Think ‘what they are doing’ and less about how they do it. should not be modified. There should be no *redirect on activation* behaviour.

[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#core-functionality-and-features)

## readme.txt file

*   Use this [format for your readme.txt file](https://make.wordpress.org/themes/handbook/review/required/sample-readme/)
*   New themes need to follow this rule as of October 25th, 2018. Old themes have a 6 months grace time from this date.

## Presentation vs Functionality

*   The theme options should not be pseudo custom post types and save non-trivial user data.
*   Non-design related functionality is not allowed. (See: [Plugin territory examples](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#plugin-territory))
*   Demo content may be used to show the user how the options work. Use [starter content](https://make.wordpress.org/core/2016/11/30/starter-content-for-themes-in-4-7/), existing content, or installation instructions instead of placeholder content. Installation instructions should only be visible to users with the edit\_theme\_options capability, not to visitors.
*   Showing preview/demo data or manipulating the preview on WordPress.org is not allowed and can result in your user account being terminated.
*   Adding custom blocks for GutenbergGutenberg The Gutenberg project is the new Editor Interface for WordPress. The editor improves the process and experience of creating new content, making writing rich content much simpler. It uses ‘blocks’ to add richness rather than shortcodes, custom HTML etc. [https://wordpress.org/gutenberg/](https://wordpress.org/gutenberg/) (the new text editor in WordPress) is not allowed. Use a companion plugin instead.
*   Placeholder/default images for posts without defined featured images [**need to follow these rules**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#featured-images)

[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#plugin-territory)

## Documentation

*   Any custom features, templates, options or any limitations (for example menu restrictions), should be explained. Enough documentation should be provided.

## Language

*   All theme text strings are to be translatable.
*   Include a text domain in style.css.
*   Use a single unique theme slug – as the theme slug appears in style.css. If it uses a framework then no more than 2 unique slugs.
*   Can use any language for text, but only use the same one for all text.

[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#language)

## Licensing

*   Be 100% GPL and/or [100% GPL-compatible](https://make.wordpress.org/themes/handbook/review/resources/#licenses-bundled-resources) licensed.
*   Declare copyright and license explicitly. Use the license and license uri headerHeader The header of your site is typically the first thing people will experience. The masthead or header art located across the top of your page is part of the look and feel of your website. It can influence a visitor’s opinion about your content and you/ your organization’s brand. It may also look different on different screen sizes. slugs to style.css.
*   Declare licenses of any resources included such as fonts or images.
*   All code and design should be your own or legally yours. Cloning of designs is not acceptable.
*   Any copyright statements on the front end should display the user’s copyright, not the theme author’s copyright.

## Naming

*   Theme names must not use: WordPress, Theme.
*   Child themes should not include the name of the parent theme unless the themes have the same author.
*   Spell “WordPress” correctly in all public facing text: all one word, with both an uppercase W and P.

[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#naming)

## Options and Settings

*   [Use the Customizer for implementing theme options](https://make.wordpress.org/themes/2015/04/22/details-on-the-new-theme-settings-customizer-guideline/).
*   Save options in a single array.
*   Don’t use transients for things they shouldn’t be used for, like storing theme options.
*   Use [sane defaults](https://make.wordpress.org/themes/2014/07/09/using-sane-defaults-in-themes/) and don’t write default setting values to the database.
*   Use *edit\_theme\_options* capability for determining user permission to edit options, rather than rely on a role (e.g. “administrator”), or a different capability (e.g. “edit\_themes”, “manage\_options”).

## Plugins

*   Themes cannot include plugins.
*   Themes cannot require plugins to work.
*   Themes may recommend plugins from WordPress.org or third-party sites (link to them as free or upsell plugins, GPL licensed only).
*   Themes may use [TGM Plugin Activation](http://tgmpluginactivation.com/) to recommend only plugins hosted on WordPress.org (by using `'required' => false` for each plugin).
*   Themes may include libraries such as option frameworks (these must pass the requirements).

## Screenshot

*   The screenshot should be a reasonable representation of what the theme can look like.
*   The screenshot may optionally show supported plugins, settings and templates.
*   The screenshot should not be a logo or mockup.
*   The screenshot should be no bigger than 1200 x 900px.

Screenshots are allowed to display only dummy text that doesn’t suggest/describe theme features, functionality, or statistics. If it looks like an AD, then it’s not allowed.

*   Dummy text examples: Lorem ipsum (or similar generators), text that doesn’t describe your theme, company, service, or products.

## Privacy

*   Don’t phone home without informed user consent. Make any collection of user data “opt-in” only and have a theme option that is set to disabled by default.
*   No URLURL A specific web address of a website or web page on the Internet, such as a website’s URL www.wordpress.org shorteners used in the theme.

## Selling, credits and links

*   *Theme URI is optional.*
*   If used, it must be about the theme we’re hosting on WordPress.org.
*   If the URI is a demo site, the content must be about the theme itself and not test data.
*   Using WordPress.org in the Theme URI is reserved for official themes.
*   *Author URI is optional*. If used it is required to link to a page or website about the author, author theme shop, or author project/development website.
*   Themes may have a single footer credit link, which is restricted to the Theme URI or Author URI defined in style.css.
*   Themes may also have an additional footer credit link pointing to WordPress.org.
*   Your site needs to state explicitly that the products you’re selling are GPL compatible. It needs to be in an easy-to-find place for the reviewer and customers.
*   Themes should not display “obtrusive” upselling. [Examples](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#selling-credits-and-links).
*   Themes are not allowed to have affiliate URLs or links.

[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#selling-credits-and-links)

## Stylesheets and Scripts

*   No hard coding of script and style files.
*   No minification of scripts or files unless you provide original files.
*   Required to use core-bundled scripts rather than including their own version of that script. For example jQuery.
*   Include all scripts and resources it uses rather than hot-linking. The exception to this is Google Fonts.

[**» Explanations & examples**](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#stylesheets-and-scripts)

## Templates

*   *If used in the theme*, standard template files are required to be called by their respective function:
    *   header.php (via [get_header()](https://codex.wordpress.org/Function_Reference/get_header)).
    *   footer.php (via [get_footer()](https://codex.wordpress.org/Function_Reference/get_footer)).
    *   sidebar.php (via [get_sidebar()](https://codex.wordpress.org/Function_Reference/get_sidebar)).
    *   searchform.php (via [get\_search\_form()](https://codex.wordpress.org/Function_Reference/get_search_form)).
*   *If you use the relevant templates,* your theme should include:
    *   [wp_head()](https://developer.wordpress.org/reference/functions/wp_head) – (immediately before `</head>`).
    *   [body_class()](https://developer.wordpress.org/reference/functions/body_class) – (inside `<body>` tag).
    *   [$content_width.](https://codex.wordpress.org/Content_Width)
    *   [post_class()](https://developer.wordpress.org/reference/functions/post_class).
    *   [wp\_link\_pages()](https://developer.wordpress.org/reference/functions/wp_link_pages).
    *   [the\_comments\_navigation()](https://developer.wordpress.org/reference/functions/the_comments_navigation/), [the\_comments\_pagination()](https://developer.wordpress.org/reference/functions/the_comments_pagination/).
    *   [the\_posts\_pagination()](https://developer.wordpress.org/reference/functions/the_posts_pagination/), [the\_posts\_navigation()](https://developer.wordpress.org/reference/functions/the_posts_navigation/).
    *   [wp_footer()](https://developer.wordpress.org/reference/functions/wp_footer) – (immediately before </body>).
*   Have a valid DOCTYPE declaration and include `language_attributes()`.
*   Custom template files should be called using [get\_template\_part()](https://developer.wordpress.org/reference/functions/get_template_part/) or [locate_template()](https://developer.wordpress.org/reference/functions/locate_template/).
*   Display the correct content according to the front page setting. ([See explanation](https://make.wordpress.org/themes/2014/06/28/correct-handling-of-static-front-page-and-custom-blog-posts-index-template/))

***It’s worth noting we are working to automate a lot of the above requirements.***

Along with the required items, you should also consider the ***[recommended items.](https://make.wordpress.org/themes/handbook/review/recommended/ "Recommended") ***The recommended items are there to make sure your theme is the best it can be and good advice to include as best practice.