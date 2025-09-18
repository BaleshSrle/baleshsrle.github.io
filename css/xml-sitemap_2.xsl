<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0" 
                xmlns:html="https://www.w3.org/TR/html52"
				xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="https://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="5.2" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>.::Balešević Srđan:: - ::XML Mapa Sajta::.</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="robots" content="index, nofollow" />
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4/dist/css/bootstrap.min.css" />
				<script src="https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js" ></script>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@4/dist/js/bootstrap.bundle.min.js" ></script>
			</head>
			<body>
				<div>
					<h1>XML Mapa sajta</h1>
					<p>
						Generisano pomoću<img class="">-ovog WordPress SEO dodatka, ovo je XML Mapa sajta, namjenjena za korištenje od strane pretraživača.
					</p>
					<p>
						Više informacija o XML mapama sajtova možete pronaći na <a href="https://www.sitemaps.org" target="_blank">sitemaps.org</a>.
					</p>
					<p>
						Ova mapa sajta sadrži <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URL adresa.
					</p>
					<div class="table-responsive">
						<table class="table table-striped table-hover">
							<thead>
								<tr>
									<th>URL</th>
									<th style="width: 5%;">Prioritet</th>
									<th style="width: 4%;">Slike</th>
									<th>Učestalost izmjena</th>
									<th>Poslednja izmjena</th>
								</tr>
							</thead>
							<tbody>
								<xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
								<xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
								<xsl:for-each select="sitemap:urlset/sitemap:url">
									<tr>
										<td>
											<xsl:variable name="itemURL">
												<xsl:value-of select="sitemap:loc"/>
											</xsl:variable>
											<a href="{$itemURL}" target="_blank">
												<xsl:value-of select="sitemap:loc"/>
											</a>
										</td>										
										<td>
											<xsl:value-of select="concat(sitemap:priority*100,'%')"/>
										</td>
										<td>
											<xsl:value-of select="count(image:image)"/>
										</td>
										<td>
											<xsl:value-of select="concat(translate(substring(sitemap:changefreq, 1, 1),concat($lower, $upper),concat($upper, $lower)),substring(sitemap:changefreq, 2))"/>
										</td>
										<td>
											<xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
										</td>
									</tr>
								</xsl:for-each>
							</tbody>
						</table>
					</div>
				</div>
				<footer>
					<img>
				</footer>
				<script>
					document.scripts[0].onerror = function () { this.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"; }
					$(document).ready(function () {
						$("link[href*='bootstrap@4']").on("error", function (){ this.href = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/css/bootstrap.min.css"; });
						$("script[src*='bootstrap@4]").on("error", function (){ this.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/js/bootstrap.bundle.min.js"; });
						$("link[rel='stylesheet'],script[src]:lt(2)").attr("crossorigin", "anonymous");
						$("div:eq(0),footer").addClass("container-fluid");
						$("img.ShieldsIoBadge").attr("src","https://img.shields.io/badge/Yoast-a61e69?logo=yoast&mp;logoSize=auto").addClass("ml-1 align-middle img-fluid").wrap($("<a></a>").attr({"href":"https://yoast.com/", "hreflang":"en", "target":"_blank"}));
						$("a:lt(2)").addClass("font-weight-bold text-danger");
						$("th:eq(0)").css("width", "60%");
						$("th:lt(3),td").addClass("align-middle text-center");
						$("th:gt(2)").css("width", "13%").addClass("text-center");
						$("footer img").attr({"src":"https://validator.w3.org/images/valid_icons/valid-xml10-blue", "alt":"Valid XML 1.0 !"}).addClass("float-left img-fluid").wrap($("<a></a>").attr({"href":"https://validator.w3.org/check?uri="+encodeURIComponent(location.href)+, "target":"_blank"}))
					});
			</script>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>