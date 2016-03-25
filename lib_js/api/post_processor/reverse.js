/*

Glǽmscribe (also written Glaemscribe) is a software dedicated to
the transcription of texts between writing systems, and more 
specifically dedicated to the transcription of J.R.R. Tolkien's 
invented languages to some of his devised writing systems.

Copyright (C) 2015 Benjamin Babut (Talagan).

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

Glaemscribe.ReversePostProcessorOperator = function(args)  
{
  Glaemscribe.PostProcessorOperator.call(this,args); //super
  return this;
} 
Glaemscribe.ReversePostProcessorOperator.inheritsFrom( Glaemscribe.PostProcessorOperator );  

Glaemscribe.ReversePostProcessorOperator.prototype.apply = function(str)
{
  var o = '';
  for (var i = str.length - 1; i >= 0; i--)
    o += str[i];
  
  return o;
}  

Glaemscribe.resource_manager.register_post_processor_class("reverse", Glaemscribe.ReversePostProcessorOperator);    
