# To The Top (TTP)
Very light and simple script to add a top return button on your website.

# Demo : *(coming soon)*

# Set up

## Required dependencies

Add dependencies in your `<head></head>`

```html
// animated.css
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">

// font-awesome
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
```

Add the script just before the body close tag
```html
<script src="TTP.js"></script>
```

Launch the library with parameters
```html
<script type="text/javascript">
  ttp(
    "circle", // box shape
    "black", // box color
    "fas fa-angle-up", // icon class (fontawesome)
    "white", // icon color
    "bounceIn", // box apparition animation name (animate.css)
    "fadeInUp", // icon apparition animation name (animate.css)
  );
</script>
```

# Parameters
box shape | icon & box color format
------------ | ------------
Square | **#A9347E** *(hexadecimal)*
Circle | **rgb(169, 52, 126)** *(RGB)*
Triangle | **rgba(169, 52, 126, .75)** *(RGBA)*
| **black** *(color name)*

icon & box animations | icons
------------ | -------------
select animation class on **[animate.css](https://daneden.github.io/animate.css/)** | select icon class on **[fontawesome](https://fontawesome.com/icons?d=gallery)**



# Templates *(coming soon)*
