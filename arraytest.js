
var res=[
    {
        "acl":"public-read",
        "bucket":"viva-s3-capstone",
        "contentDisposition":null,
        "contentType":"application/octet-stream",
        "encoding":"7bit",
        "etag":"\"5a658892fb4838a66199ed813b5ac18a\"",
        "fieldname":"mark",
        "key":"3341619710243903.jpeg",
        "location":"https://viva-s3-capstone.s3.ap-northeast-2.amazonaws.com/3341619710243903.jpeg",
        "metadata":null,
        "mimetype":"image/jpeg",
        "originalname":"O1619710240.jpeg",
        "serverSideEncryption":null,
        "size":822493,
        "storageClass":"STANDARD",
        "versionId":"aD.wsgnhx.6y5DISAq3tqFWpuLcvRb3c"
    },
    {
        "acl":"public-read",
        "bucket":"viva-s3-capstone",
        "contentDisposition":null,
        "contentType":"application/octet-stream",
        "encoding":"7bit",
        "etag":"\"d82e5eb8a3b03e425d8f460240b9fec6\"",
        "fieldname":"mark",
        "key":"1531619710244298.jpeg",
        "location":"https://viva-s3-capstone.s3.ap-northeast-2.amazonaws.com/1531619710244298.jpeg",
        "metadata":null,
        "mimetype":"image/jpeg",
        "originalname":"O1619710242.jpeg",
        "serverSideEncryption":null,
        "size":1018877,
        "storageClass":"STANDARD",
        "versionId":"AE1J0Xu1Cs4t_1fgNAXSH1nxgivlWQ9i"
    }
]

// console.log(res.length);

for(var i=0;i<res.length;i++){
    console.log(res[i].location);
}
