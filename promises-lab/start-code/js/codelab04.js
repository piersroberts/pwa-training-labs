/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const image1 = promiseFlag('Spain');
const image2 = promiseFlag('Argentina');
const image3 = promiseFlag('Armenia');

Promise.all([image1, image2, image3])
.then(function() {
  console.log('All images loaded successfully');
})
.catch(function(message) {
  console.log('One or more images failed to load ' + message);
});
