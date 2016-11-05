<cfparam name="author" default="">
<cfparam name="text" default="">

<cfif #len(author)# and #len(text)#>
<cfoutput>
<cfsavecontent variable="comments">{Author:"#author#",Text:"#text#"}</cfsavecontent>
<cffile action="WRITE" file="#expandPath('.')#\jsnPst.txt" output="#comments#" addnewline="Yes">
	</cfoutput>
</cfif>