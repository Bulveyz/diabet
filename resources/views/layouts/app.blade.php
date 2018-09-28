<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- CSRF Token -->
	<meta name="csrf-token" content="{{ csrf_token() }}">

	<title>{{ config('app.name', 'Laravel') }}</title>

	<!-- Fonts -->
	<link rel="dns-prefetch" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

	<!-- Vendors -->
	<link rel="stylesheet" href="{{asset('vendor/font-awesome/css/fontawesome.css')}}">
	<link rel="stylesheet" href="{{asset('vendor/bootstrap/css/bootstrap.css')}}">
	<link rel="stylesheet" href="{{asset('vendor/htmlstram/htmlstram.css')}}">

	<!-- Styles -->
	<link href="{{ asset('css/style.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
	@yield('content')
	<sidebar auth="{{auth()->check()}}"></sidebar>
</div>
<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
