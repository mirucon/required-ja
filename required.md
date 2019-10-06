Last modified: 2019-10-05T17:16:51

A theme must meet all of the following requirements to be included in the WordPress.orgWordPress.org The community site where WordPress code is created and shared by the users. This is where you can download the source code for WordPress core, plugins and themes as well as the central location for community conversations and organization. [https://wordpress.org/](https://wordpress.org/) theme repository.

Themes that have **3 or more distinct issues may be closed** as not-approved. However, theme authors may resubmit the theme once they’ve corrected the issues.

Along with these checks, you should also run the theme through the [Theme Check](https://wordpress.org/plugins/theme-check/) pluginPlugin A plugin is a piece of software containing a group of functions that can be added to a WordPress website. They can extend functionality or add new features to your WordPress websites. WordPress plugins are written in the PHP programming language and integrate seamlessly with WordPress. These can be free in the WordPress.org Plugin Directory https://wordpress.org/plugins/ or can be cost-based plugin from a third-party. You can find a full list of what it [checks here](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/).

* * *

Note: If you are getting started with your first reviews, please read [Become a reviewer](https://make.wordpress.org/themes/handbook/get-involved/become-a-reviewer/). 

* * *

Warning: **If you are a theme shop you should be selling under GPLGPL GPL is an acronym for GNU Public License. It is the standard license WordPress uses for Open Source licensing [https://wordpress.org/about/license/](https://wordpress.org/about/license/). The GPL is a ‘copyleft’ license [https://www.gnu.org/licenses/copyleft.en.html](https://www.gnu.org/licenses/copyleft.en.html). This means that derivative work can only be distributed under the same license terms. This is in distinction to permissive free software licenses, of which the BSD license and the MIT License are widely used examples.GPL GPL is an acronym for GNU Public License. It is the standard license WordPress uses for Open SourceOpen Source Open Source denotes software for which the original source code is made freely available and may be redistributed and modified. Open Source \*\*must be\*\* delivered via a licensing model, see GPL. licensing [https://wordpress.org/about/license/](https://wordpress.org/about/license/). The GPL is a ‘copyleft’ license [https://www.gnu.org/licenses/copyleft.en.html](https://www.gnu.org/licenses/copyleft.en.html). This means that derivative work can only be distributed under the same license terms. This is in distinction to permissive free software licenses, of which the BSD license and the MIT License are widely used examples. to be in the WordPress.orgWordPress.org The community site where WordPress code is created and shared by the users. This is where you can download the source code for WordPress coreCore Core is the set of software required to run WordPress. The Core Development Team builds WordPress., plugins and themes as well as the central location for community conversations and organization. [https://wordpress.org/](https://wordpress.org/) repo** ([See explanation](https://make.wordpress.org/themes/2015/08/15/themes-should-be-100-gpl/)).

Example: If you have a **Themeforest account** and you’re selling themes on it, all those themes need to state on their sales page that they are **100% GPL compatible** ([Info](https://help.market.envato.com/hc/en-us/articles/202501194-Theme-Plugin-Licensing-Options)).

* * *

## Multiple Theme Author Accounts

Warning: **This is important,  so please read it carefully**

You can have multiple accounts with the following restrictions:

*   You can’t have more than one (1) open ticket in any of the tracTrac Trac is the place where contributors create issues for bugs or feature requests much like GitHub.[https://core.trac.wordpress.org/](https://core.trac.wordpress.org/). reports/queues or under review. That means you can’t have one (1) theme ticket from an account and another one from a secondary account, simultaneously open in any of the queues
*   Failing to respect the above requirement will result in the closing of all tickets and not having the possibility to upload those themes again. Also, a 1 month no upload possibility for each ticket closed. Depending on the severity of the case, you might also end up with a permanent ban on all your accounts
*   To avoid penalties, we request that you disclose all your accounts by emailing us at themes\[at\]wordpress.org

## AccessibilityAccessibility Accessibility (commonly shortened to a11y) refers to the design of products, devices, services, or environments for people with disabilities. The concept of accessible design ensures both “direct access” (i.e. unassisted) and “indirect access” meaning compatibility with a person’s assistive technology (for example, computer screen readers). (https://en.wikipedia.org/wiki/Accessibility)

**Skip Links** – Themes must include a mechanism that enables users to navigate directly to content or navigation on entering any given page. These links may be positioned off-screen initially but must be available to screen reader users and must be visible on focus for sighted keyboard navigators.

A minimally conforming skip link must:

*   Be the first focusable element perceived by a user via a screen reader or keyboard navigation
*   Be visible when keyboard focus moves to the link
*   Move focus to the main content area of the page when activated

Note that this only applies *if there is something to skip past,* such as a menu or larger headerHeader The header of your site is typically the first thing people will experience. The masthead or header art located across the top of your page is part of the look and feel of your website. It can influence a visitor’s opinion about your content and you/ your organization’s brand. It may also look different on different screen sizes. section or secondary widgetWidget A WordPress Widget is a small block that performs a specific function. You can add these widgets in sidebars also known as widget-ready areas on your web page. WordPress widgets were originally created to provide a simple and easy-to-use way of giving design and structure control of the WordPress theme to the user. area before the main content.

If the theme has the tag ‘accessibility-ready’ then it needs to meet [these additional requirements](https://make.wordpress.org/themes/handbook/review/accessibility/).

## Code

*   **No PHPPHP PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML. [http://php.net/manual/en/intro-whatis.php](http://php.net/manual/en/intro-whatis.php). or JS notices**
*   Validate and/or sanitize untrusted data before entering into the database. All untrusted data should be escaped before output. (See: [Data Validation](https://codex.wordpress.org/Data_Validation))
*   No removing or modifying non-presentational hooksHooks In WordPress theme and development, hooks are functions that can be applied to an action or a Filter in WordPress. Actions are functions performed when a certain event occurs in WordPress. Filters allow you to modify certain functions. Arguments used to hook both filters and actions look the same..
*   Must meet all [Theme Check requirements](https://make.wordpress.org/themes/handbook/review/required/theme-check-plugin/)
*   Provide a [unique prefix](http://themereview.co/prefix-all-the-things/) for everything the Theme defines in the public namespace, including options, functions, global variables, constants, post metaMeta Meta is a term that refers to the inside workings of a group. For us, this is the team that works on internal WordPress sites like WordCamp Central and Make WordPress., etc. Theme nav menu locations and sidebarSidebar A sidebar in WordPress is referred to a widget-ready area used by WordPress themes to display information that is not a part of the main content. It is not always a vertical column on the side. It can be a horizontal rectangle below or above the content area, footer, header, or any where in the theme. IDs are exceptions

#### Examples

**No PHP errors, warnings or notices**

Themes must support PHP7. This means there must be no PHP errors, warnings or notices when running on PHP7. 

WordPress still supports lower PHP versions such as PHP 5.6 ([read more](https://wordpress.org/about/requirements/)). There should not be any PHP errors, warnings or notices if the theme is activated on a server with PHP 5.6.  Instead of downgrading the code to work for 5.6, the theme can include a PHP version check and deactivate the theme.

**Have a valid DOCTYPE declaration and include language_attributes**

```
<!doctype html>
<html <?php language_attributes(); ?>> 
``` **No adding shortcodes**

The use of the `add_shortcode()` function is not allowed in themes as shown below:

```
add_shortcode( 'shortcode_name', 'shortcode_callback_func' );
```

**No removing or modifying non-presentational hooks**

```
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'feed_links_extra', 3); 
remove_action( 'wp_head', 'feed_links', 2); 

remove_action( 'admin_notices', 'update_nag', 3 );
remove_action( 'network_admin_notices', 'update_nag', 3 );

remove_filter( 'the_content','wpautop' );

add_filter( 'show_admin_bar', '__return_false' );
```

## Core Functionality and Features

*   Use [WordPress functionality and features first, if available](https://developer.wordpress.org/themes/functionality/).  
    *If incorporated,* features must support the WordPress functionality:  
    *   [Automatic Feed Links](https://developer.wordpress.org/reference/functions/add_theme_support/#feed-links)
    *   [Sidebars](https://developer.wordpress.org/themes/functionality/sidebars/)
    *   [Navigation Menus](https://developer.wordpress.org/themes/functionality/navigation-menus/)
    *   [Post Thumbnails](https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/)
    *   [Custom Headers](https://developer.wordpress.org/themes/functionality/custom-headers/)
    *   [Custom Backgrounds](https://codex.wordpress.org/Custom_Backgrounds)
    *   [Editor Style](https://developer.wordpress.org/reference/functions/add_editor_style/)
    *   [Logo](https://developer.wordpress.org/themes/functionality/custom-logo/)
*   Do not use features/APIs meant for WP Core use only e.g. [admin pointers](https://developer.wordpress.org/reference/classes/wp_internal_pointers/) and [private functions](https://codex.wordpress.org/Category:Private_Functions)
*   **No paywall restricting any WordPress feature**
*   **Avoid hard coding to modify content**. Instead, use function parameters, filters and action hooks where appropriate. For example, [wp_title](https://developer.wordpress.org/reference/functions/wp_title/) should be modified using a [filter](https://developer.wordpress.org/reference/hooks/wp_title/)
*   Able to have child themes made from them. (Child themeChild theme A Child Theme is a customized theme based upon a Parent Theme. It’s considered best practice to create a child theme if you want to modify the CSS of your theme. [https://developer.wordpress.org/themes/advanced-topics/child-themes/](https://developer.wordpress.org/themes/advanced-topics/child-themes/). ready)
*   The [theme tags](https://make.wordpress.org/themes/handbook/review/required/theme-tags/) in style.css and description must match what the theme actually does in respect to functionality and design. **Don’t use more than 3 subject tags** (See: [Theme Tag List](https://make.wordpress.org/themes/handbook/review/required/theme-tags/))
*   Use [template tags](https://codex.wordpress.org/Template_Tags) and action/filterFilter Filters are one of the two types of Hooks [https://codex.wordpress.org/Plugin_API/Hooks](https://codex.wordpress.org/Plugin_API/Hooks). They provide a way for functions to modify data of other functions. They are the counterpart to Actions. Unlike Actions, filters are meant to work in an isolated manner, and should never have side effects such as affecting global variables and output. hooks properly
*   Include comments.php (via [comments_template()](https://codex.wordpress.org/Function_Reference/comments_template))
*   Themes may be **backward compatible**, but **only for 3 major WordPress versions** (version 4.9 if 5.2 is latest)
*   Themes **should not remove, hide, or otherwise blockBlock Block is the abstract term used to describe units of markup that, composed together, form the content or layout of a webpage using the WordPress editor. The idea combines concepts of what in the past may have achieved with shortcodes, custom HTML, and embed discovery into a single consistent API and user experience. the admin bar from appearing**
*   **Core theme activation UXUX UX is an acronym for User Experience - the way the user uses the UI. Think ‘what they are doing’ and less about how they do it. should not be modified**. There should be no *redirect on activation* behavior
*   All the notifications generated by a theme should use the admin_notices APIAPI An API or Application Programming Interface is a software intermediary that allows programs to interact with each other and share data in limited, clearly defined ways. and follow the core design pattern. They must be dismissible. Everything wrapped in the admin notice needs to follow core UIUI UI is an acronym for User Interface - the layout of the page the user interacts with. Think ‘how are they doing that’ and less about what they are doing. design for the notices

#### Examples

**Use get\_template\_directory() rather than TEMPLATEPATH to return the template path**  

```
require_once( trailingslashit( get_template_directory() ) . 'inc/example.php' );
```

**Use get\_stylesheet\_directory() rather than STYLESHEETPATH to return the template path**

```
require_once( trailingslashit( get_stylesheet_directory() ) . 'inc/example.php' );
```

This example should come with an additional warning to check if the file exists first if not used in a child theme.

**Include comments_template()**

```
comments_template();
```

Should be called in at least all singular views.

## Child themes

*   Child themes must include more than minor changes (such as font and color changes) to the parent theme to be accepted. To make it easier on the reviewer, make sure you describe what modifications/features you did on top of the parent theme (in a ticket comment).

## Format of the readme.txt file

The sample readme presented below is a living document. It may change in the future.

*   The file header is required. There **must not be any empty lines in the file header**. Tested up to field should be present.
*   Right now, we share the [readme validator tool](https://wordpress.org/plugins/developers/readme-validator/) with plugins. Any warnings are required to be fixed, except for the *Stable tag* warning.
*   The other sections are optional, but we expect theme authors to **include a list of license and copyright information** somewhere in the theme: The resources section may be used for this purpose.

#### Example

**readme.txt example**

```
=== Theme Name ===
Contributors: (Should only contain WordPress.org usernames.)
Requires at least: 5.0
Tested up to: 5.2
Requires PHP: 5.6
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Short description. No more than 150 chars.

== Description ==
Theme desc.

== Frequently Asked Questions ==

= A question that someone might have =

An answer to that question.

== Changelog ==

= 1.0 =
* Added new option

= 0.5 =
* Security bug addressed
* Changed thumbnail size

== Upgrade Notice ==

= 1.0 =
* Upgrade notices describe the reason a user should upgrade.  No more than 300 characters.

= 0.5 =

* This version fixes a security related bug.  Upgrade immediately.

== Resources ==
* magnify.jpg © 2014 Jane Doe, CC0
* supermenu.js © 2013-2015 James Today, MIT 
``` 

## Presentation vs Functionality

*   The theme options should not be pseudo custom post types and save non-trivial user data
*   Non-design related functionality is not allowed. (See: [Plugin territory examples](https://make.wordpress.org/themes/handbook/review/required/explanations-and-examples/#plugin-territory))
*   Use [starter content](https://make.wordpress.org/core/2016/11/30/starter-content-for-themes-in-4-7/), existing content, or installation instructions instead of placeholder content. Installation instructions should only be visible to users with the `edit_theme_options` capability, not to visitors
*   Showing preview/demo data or manipulating the preview on WordPress.org is not allowed and can result in your user account being terminated
*   **Adding custom blocks for GutenbergGutenberg The Gutenberg project is the new Editor Interface for WordPress. The editor improves the process and experience of creating new content, making writing rich content much simpler. It uses ‘blocks’ to add richness rather than shortcodes, custom HTML etc. [https://wordpress.org/gutenberg/](https://wordpress.org/gutenberg/)** (the new text editor in WordPress) **is not allowed**. Use a companion plugin instead
*   Placeholder/default images for posts without defined featured images **need to follow these rules**:
    *   be generic (solid color, gradient or patterns)
    *   they can’t display logos
    *   they can’t display text, only accepted form would be displaying the image size, `400x300px`
    *   icons are allowed as long as they are not logos. A good example is a `photo camera` icon
    *   they need to be bundled within the theme, don’t use third-party placeholder services directly (e.g: `placeholder.com`).

#### Examples

**Examples of plugin territory functionality**

Analytics or tracking support  
SEO options  
Contact forms  
Non-design related meta boxes  
Resource caching  
Dashboard widgets in the admin area  
Custom Post Types and Shortcodes  
Social media ‘like’, ‘follow’ and ‘share buttons’  
Custom core editor (Gutenberg) blocks  
Default logo

## Importing or Downloading

*   Themes are **not allowed to import content** to a user’s site
*   Themes are **not allowed to link directly** to an XML, JSONJSON JSON, or JavaScript Object Notation, is a minimal, readable format for structuring data. It is used primarily to transmit data between a server and web application, as an alternative to XML., ZIP, or other files for direct download or import
*   Themes are **not allowed to bundle demo content** via an XML, JSON, ZIP, or other files

## Documentation

*   Any custom features, templates, options or any limitations (for example menu restrictions), should be explained. Enough documentation should be provided.

## Language

*   All theme text strings are to be translatable
*   Include a text-domain in `style.css`
*   Use a single unique theme slug – as the theme slug appears in style.css. If the theme uses a framework then no more than 2 unique slugs (like `tgmpa`, `redux-framework`, `kirki` or some other allowed framework)
*   Can use any language for text, but only use the same one for all text.
*   If a theme author chooses to include a POT file in their theme it needs to be kept up to date with all translation strings

#### Examples

**Text domain should be listed in the theme’s style.css head comment block**

The text domain should be generated from the theme slug

```
Theme Name: Mim's Debacle
Text Domain: mims-debacle
```

**Theme authors can include their own language packs that will supersede the WordPress ones**

Theme authors have the choice of including their own language packs which will supersede the ones WordPress will self-install.  
Here is an example how the text domain is loaded:

```
add_action( 'after_setup_theme', 'theme_review_setup' );
function theme_review_setup(){
    load_theme_textdomain( 'theme-slug', get_template_directory() . '/languages' );
}
```

For child themes loading the text domain would be:

```
add_action( 'after_setup_theme', 'theme_review_child_domain', 11 );
function theme_review_child_domain(){
    load_child_theme_textdomain( 'child-slug', get_stylesheet_directory() . '/languages' );
}
```

## Licensing

*   **Be 100% GPL and/or** [**100% GPL-compatible**](https://make.wordpress.org/themes/handbook/review/resources/#licenses-bundled-resources) **licensed**
*   **Declare copyright and license explicitly**. Use the license and license URI header slugs to `style.css`
*   Declare licenses of any resources included such as fonts or images
*   All code and design should be your own or legally yours. **Cloning of designs is not acceptable**
*   Any copyright statements on the front end should display the user’s copyright, not the theme author’s copyright

## Naming

*   Theme names **must not use**: WordPress, Theme, Twenty*
*   Child themes should not include the name of the parent theme unless the themes have the same author  
    This requirement was put in place in order to prevent theme names like “Twenty Sixteen Child” and to protect theme authors
*   Spell “WordPress” correctly in all public-facing text: all one word, with both an uppercase W and P

## Options and Settings

*   [Use the Customizer for implementing theme options](https://make.wordpress.org/themes/2015/04/22/details-on-the-new-theme-settings-customizer-guideline/)
*   Save options in a single array
*   **Don’t use transients** for things they shouldn’t be used for, like storing theme options
*   Use [sane defaults](https://make.wordpress.org/themes/2014/07/09/using-sane-defaults-in-themes/) and don’t write default setting values to the database
*   Use `edit_theme_options` capability for determining user permission to edit options, rather than relying on a role (e.g. `administrator`), or a different capability (e.g. `edit_themes`, `manage_options`)

## Plugins

*   Themes **cannot include plugins**
*   Themes **cannot require plugins** to work
*   Themes **may recommend** plugins from WordPress.org
*   Themes may only use [TGM Plugin Activation](http://tgmpluginactivation.com/) or similar libraries to recommend and install plugins that are hosted on WordPress.org (by using `'required' => false` for each plugin)
*   Themes **may include libraries** such as option frameworks (these must pass the requirements)
*   Themes **may recommend** GPL compatible plugins that are not hosted on WordPress.org in the readme file or the themes information page **but may not** include a direct link to the download for security reasons. You can link to the product page for the recommended plugin, but not directly to the download file.

## Screenshot

*   The screenshot should be a reasonable representation of what the theme can look like
*   The screenshot may optionally show supported plugins, settings and templates
*   The screenshot should not be a logo or mockup
*   The screenshot should be no bigger than 1200 x 900px
*   The ratio of width to height should be 4:3

*   Screenshots are allowed to display only dummy text that doesn’t suggest/describe theme features, functionality, or statistics. If it looks like an AD, then it’s not allowed
*   Dummy text examples: Lorem ipsum (or similar generators), text that doesn’t describe your theme, company, service, or products

## Privacy

*   Don’t ‘phone home’ without informed user consent. Make any collection of user data “opt-in” only and have a theme option that is set to disabled by default
*   No URLURL A specific web address of a website or web page on the Internet, such as a website’s URL www.wordpress.org shorteners used in the theme (`bit.ly`, `bit.do`, `goo.gl` etc.)

## Image guidelines

*   Images that show children with recognizable facial or body features are not permitted.

## Selling, credits, and links

*   *Theme URI is optional*
*   If used, it must be about the theme we’re hosting on WordPress.org
*   If the URI is a demo site, the content must be about the theme itself and not test data
*   Using WordPress.org in the Theme URI is reserved for official themes.
*   *Author URI is optional*. If used it is required to link to a page or website about the author, author theme shop, or author project/development website
*   Themes may have a single footer credit link, which is restricted to the Theme URI or Author URI defined in style.css
*   Themes may also have an additional footer credit link pointing to WordPress.org
*   **Your site needs to state explicitly that the products you’re selling are GPL compatible**. It needs to be in an easy-to-find place for the reviewer and customers
*   Themes should not display “obtrusive” upselling
*   Themes are not allowed to have affiliate URLs or links

#### Examples

**Unobtrusive upselling guidelines**

The text domain should be generated from the theme slug.

Notifications such as admin notices must be dismissible.  
This means that the notices should not only be closed, but hidden permanently when the “Dismiss” link is closed.

Only one sub-page in addition to the TGMPA plugin installation page is allowed under the Appearance section in the admin sidebar.

Only one link on the top level in the customizerCustomizer Tool built into WordPress core that hooks into most modern themes. You can use it to preview and modify many of your site’s appearance settings. is allowed. This must be done using the customizer API (no injecting via JavaScriptJavaScript JavaScript or JS is an object-oriented computer programming language commonly used to create interactive effects within web browsers. WordPress makes extensive use of JS for a better user experience. While PHP is executed on the server, JS executes within a user’s browser. [https://www.javascript.com/](https://www.javascript.com/).). [Example](https://github.com/justintadlock/trt-customizer-pro).  
Further unobtrusive links are allowed in a separate section.

No options or panels/sections can be locked behind a paywall.

All settings in a theme must work.

**As theme features for user social media**

Social media links with icons settings are allowed.

The simpler Social media sharing links that uses `sharer.php?` or similar **are allowed**.

Social media “like” and “follow” buttons are **not allowed**.

**Theme authors social media**

Social media links **are allowed**.

Social media “like”, “follow” and “share” buttons are **not allowed**.

## Stylesheets and Scripts

*   **No hard coding of script and style files**
*   No minification of scripts or files unless you provide original files
*   **Required to use core-bundled scripts** rather than including their own version of that script. For example jQuery
*   Include all scripts and resources it uses rather than hot-linking. The exception to this is Google Fonts

#### Examples

**Enqueue stylesheets using `wp_enqueue_style`**

The following example is **not allowed**:

```
<link type="text/css" rel="stylesheet" href="" />
```

The correct way would be to call `wp_enqueue_style()` from a function that is hooked on the `wp_enqueue_scripts` action:

```
add_action( 'wp_enqueue_scripts', 'theme_review_css' );

function theme_review_css() {
	wp_enqueue_style( 'theme-style', get_stylesheet_uri(), array(), '1.0.0', 'all' );
}
```

**Printing internal styles using HTMLHTML HTML is an acronym for Hyper Text Markup Language. It is a markup language that is used in the development of web pages and websites. tags directly in `header.php` is not allowed**

The correct way would be to use a function that calls `wp_add_inline_style` and is hooked on the `wp_enqueue_scripts`action:

```
add_action( 'wp_enqueue_scripts', 'theme_review_styles' );

function theme_review_styles() {
	$custom_css = '
		.mycolor {
			background: red;
		}';
	wp_add_inline_style( 'theme-style', $custom_css );
}
```

That would print the content of the `$custom_css` variable inside style tags directly after the stylesheet with the handle ‘theme-style’ is printed in the head.

**Enqueue scripts using** `**wp_enqueue_style**`

The following example is not allowed:

```
echo get_template_directory_uri() . /js/theme-slider.js
```

The correct way would be to call `wp_enqueue_style()` from a function that is hooked on the `wp_enqueue_scripts` action:

```
add_action( 'wp_enqueue_scripts', 'theme_review_slider_options' );

function theme_review_slider_options() {
	wp_enqueue_script( 'theme-slider', get_template_directory_uri() . '/js/theme-slider.js', array( 'jquery' ), '1.0.0', false );
	wp_enqueue_script( 'theme-slider-init', get_template_directory_uri() . '/js/init.js', array( 'jquery', 'theme-slider' ), '1.0.0', false );

	// Get user options.
	$options = array();

	$options['autoplay']         = esc_attr( get_theme_mod( 'slider-autoplay', true ) );
	$options['navigation_style'] = esc_attr( get_theme_mod( 'nav-style', 'circles' ) );

	wp_localize_script( 'theme-slider-init', 'themeSliderOptions', $options );
}
```

**Printing internal scripts using HTML tags directly in templates is not allowed**

The correct way would be to use a function that calls `wp_add_inline_script` and is hooked on the `wp_enqueue_scripts` action:

```
add_action( 'wp_enqueue_scripts', 'theme_review_add_inline_script' );

function theme_review_add_inline_script() {
	wp_add_inline_script(
		'theme-review-script',
		'$(document).ready( function() {
			$(".selector").hide();
		}'
	);
}
```

That would print the `hide()` script inside script tags directly after the script with the handle ‘theme-review-script’ is printed in the head or footer.

## Templates

*   *If used in the theme*, standard template files are required to be called by their respective function:
    *   `header.php` (via [`get_header()`](https://codex.wordpress.org/Function_Reference/get_header))
    *   `footer.php` (via [`get_footer()`](https://codex.wordpress.org/Function_Reference/get_footer))
    *   `sidebar.php` (via [`get_sidebar()`](https://codex.wordpress.org/Function_Reference/get_sidebar))
    *   `searchform.php` (via [`get_search_form()`](https://codex.wordpress.org/Function_Reference/get_search_form))
*   *If you use the relevant templates,* your theme should include:
    *   [`wp_head()`](https://developer.wordpress.org/reference/functions/wp_head) – (immediately before `</head>`)
    *   [`body_class()`](https://developer.wordpress.org/reference/functions/body_class) – (inside `<body>` tag)
    *   [`$content_width`](https://codex.wordpress.org/Content_Width)
    *   [`post_class()`](https://developer.wordpress.org/reference/functions/post_class)
    *   [`wp_link_pages()`](https://developer.wordpress.org/reference/functions/wp_link_pages)
    *   [`the_comments_navigation()`](https://developer.wordpress.org/reference/functions/the_comments_navigation/), [`the_comments_pagination()`](https://developer.wordpress.org/reference/functions/the_comments_pagination/)
    *   `[the_posts_pagination()](https://developer.wordpress.org/reference/functions/the_posts_pagination/)`, [`the_posts_navigation()`](https://developer.wordpress.org/reference/functions/the_posts_navigation/)
    *   [`wp_footer()`](https://developer.wordpress.org/reference/functions/wp_footer) – (immediately before `</body>`).
*   **Have a valid DOCTYPE declaration** and include `language_attributes()`
*   Custom template files should be called using [`get_template_part()`](https://developer.wordpress.org/reference/functions/get_template_part/) or [`locate_template()`](https://developer.wordpress.org/reference/functions/locate_template/)
*   Display the correct content according to the front page setting. ([See explanation](https://make.wordpress.org/themes/2014/06/28/correct-handling-of-static-front-page-and-custom-blog-posts-index-template/))

***It’s worth noting we are working to automate a lot of the above requirements.***

Along with the required items, you should also consider the ***[recommended items.](https://make.wordpress.org/themes/handbook/review/recommended/) ***The recommended items are there to make sure your theme is the best it can be and good advice to include as best practice.