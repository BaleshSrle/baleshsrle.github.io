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
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6/dist/css/bootstrap.min.css" crossorigin="anonymous" />
				<script src="https://cdn.jsdelivr.net/npm/jquery@3.7/dist/jquery.min.js" crossorigin="anonymous"></script>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
			</head>
			<body>
				<div>
					<h1>XML Mapa sajta</h1>
					<p>
						Generisano pomoću <a href="https://yoast.com/" target="_blank">Yoast</a>-ovog WordPress SEO dodatka, ovo je XML Mapa sajta, namjenjena za korištenje od strane pretraživača.
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
					<a href="https://validator.w3.org/check?uri=https%3A%2F%2Fbaleshsrle.github.io/sitemap.xml" target="_blank"><img src="https://validator.w3.org/images/valid_icons/valid-xml10-blue" alt="Valid XML 1.0 !" class="float-left"></img></a>
				</footer>
				<script>
					$(document).ready(function () {
						$("link[rel='stylesheet'],script[src]:lt(2)").attr("crossorigin", "anonymous");
						$("div:eq(0),footer").addClass("container-fluid");
						$("a:lt(2)").addClass("font-weight-bold text-danger");
						$("th:eq(0)").css("width", "60%").addClass("align-middle");
						$("th:lt(3):gt(0),td:not(:eq(0),:eq(5),:eq(10),:eq(15),:eq(20),:eq(25),:eq(30))").addClass("align-middle text-center");
						$("th:gt(2)").css("width", "13%").addClass("text-center");
						$("td").filter(":eq(0),:eq(5),:eq(10),:eq(15),:eq(20),:eq(25),:eq(30)").addClass("align-middle");
					});
			</script>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>