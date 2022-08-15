import request

indeed_result = request.get("https://kr.indeed.com/jobs?q=python&l&from=searchOnHP&vjk=6dd48f3771d01215")

print(indeed_result)