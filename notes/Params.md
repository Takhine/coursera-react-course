<Link to{`/menu/${dish.id}`}>

match object provides information about how a <Route path> matched the URL
params: an object thtat contains key/value pair parsed from theUR; corresponding to the dynamic segments of the path

eg: if path is specified as /menu/:id then a path like /menu/42 will result in a match.params.id eqal to "42"