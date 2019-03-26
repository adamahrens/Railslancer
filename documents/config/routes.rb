# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                indentures GET    /indentures(.:format)                                                                    indentures#index
#                           POST   /indentures(.:format)                                                                    indentures#create
#                 indenture GET    /indentures/:id(.:format)                                                                indentures#show
#                           PATCH  /indentures/:id(.:format)                                                                indentures#update
#                           PUT    /indentures/:id(.:format)                                                                indentures#update
#                           DELETE /indentures/:id(.:format)                                                                indentures#destroy
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  resources :indentures
end
