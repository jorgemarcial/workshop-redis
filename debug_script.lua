redis.call('ECHO', '** start transaction **')

local voucher = redis.call("lpop", "rewards")
    if #voucher == 0 then
        return {}
    end
redis.call('ECHO', '** the value of voucher is ' .. voucher ..'**')
local winner = redis.call("hmset", "winners","id", 1, "name", "jorge", "voucher", voucher)

redis.call('ECHO', '** finish transaction **')
