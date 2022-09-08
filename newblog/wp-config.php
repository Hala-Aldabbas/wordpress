<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'newblog' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'qwerty123456' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5G%By!}ogq*llCA#r5`Cy[]DkzMA`U:0;paf UFpcD15c${J1n.X[Mwt5D,alk|y' );
define( 'SECURE_AUTH_KEY',  '-j;}9Q_+x-d=d|-9>=HI6CJ=]n9DYHp(W$g_L7f0bs&r@Lw5:]+(9=uc/~M+||ra' );
define( 'LOGGED_IN_KEY',    'Z_k&Gtf8,DmEQZn8`.j{e&J~It9<zFC~1*`1h+RtaaV,0]A5XkXoAL1<ccM>h<8%' );
define( 'NONCE_KEY',        'k]I<R0P>F{6,yAeN8WRN@f$i5)O3xj-K4@.k|6S6xr>RR1 HyLFq!qv!`c,K;~E ' );
define( 'AUTH_SALT',        '# /nxHoRAkdrOCKeC=#cQu*/eG]Pv[_#oyi,O)ALDVF.5_/E{E_&/OH Jb7oE-su' );
define( 'SECURE_AUTH_SALT', 'vxd1ZCowzqV)D|w<Kl+BK`( N@-7Q{d3&T+@BEXXh6lU^6DJ,Y;0J&(E`ge8P^8x' );
define( 'LOGGED_IN_SALT',   'r(ITYsvxLt$J!s:BncUu4)goV4]A#x-M9^xQlWout+Ko<Ze%i/,o70a~sU1Z(q|t' );
define( 'NONCE_SALT',       'U JvK2izw:7jdNyr82~qC|sl4bjYIUDhGb!r<Muz3G^V6%2^t>%hsf>Z;wGwv=yC' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
