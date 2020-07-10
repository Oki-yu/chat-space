FactoryBot.define do
  factory :message do
    content{Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/test_image.jpg")}
    user_id{1}
    group_id{1}
  end
end